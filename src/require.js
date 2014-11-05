(function (exports) {

var BASE = 'test/';
var modules = {};
var loadedModules = {};
var loading = {};
var define = function (name, requires, valueFn) {
  if (name === 'hasOwnProperty') {
    throw 'can not name a module hasOwnProperty';
  }
  // todo should add defer
  if (requires && requires.length) {
    for (var i = 0; i < requires.length; i++) {
      loadModule(requires[i]);
    }
  }
  loadedModules[name] = valueFn;
  if (loading[name]) {
    // loading[name].resolve(invoke(requires, valueFn));
    console.log('resolve')
    loading[name].resolve(valueFn());
    // loading[name].resolve(3);
  }
}

var invoke = function (requires, fn) {
  var args = [];
  for (var i = 0; i < requires.length; i++) {
    args[i] = loadedModules[requires[i]];
  }
  fn.apply(null, args);
};
var config = function (configObject) {
  // body...
};

var loadModule = function (name, defer) {
  loading[name] = defer;
  // todo add async loading
  var url = name;//todo 
  var node = document.createElement('script');
  node.type = 'text/javascript';
  node.charset = 'utf-8';
  node.async = true;
  // node.addEventListener('load', function (e) {
  //   console.log(e, '11111');
  //   defer.resolve(e);
  // });
  // node.onload = function () {
  //   console.log('ccx');
  // };
  document.getElementsByTagName('head')[0].appendChild(node);
  node.src = BASE + url + '.js';
}
// exports.define = define;

var hasModule = function (name) {
  return modules.hasOwnProperty(name);
};

var getQArray = function (requires) {
  var qArray = [];
  for (var i = 0; i < requires.length; i++) {
    var defer = Q.defer();
    qArray.push(defer.promise);
    if (loadedModules[requires[i]]) {
      defer.resolve(loadedModules[requires[i]]);
    } else {
      loadModule(requires[i], defer);
    }
  }
  return qArray;
};

var require = function (requires, fn) {
  var args = [];
  var qArray = getQArray(requires);
  if (!qArray.length) {
    fn.apply();
  } else {
    console.log(qArray.length)
    Q.all(qArray).then(function (result) {
      // console.log('invoked', result[0])
      fn.apply(null, result);
    });
  }
};
exports.r = {
  config: config,
  define: define,
  loadModule: loadModule,
  has: hasModule,
  require: require,
  getQArray: getQArray
};

})(this)