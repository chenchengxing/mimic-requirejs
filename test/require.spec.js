// var expect = chai.expect;
describe('requirejs', function() {
  // beforeEach(function () {
  //   delete window.r;
  //   setUpR(window);
  // })
  // it('expose r', function() {
  //   expect(r).toBeDefined();
  // });

  // describe('getQArray', function() {
  //   it('get q array', function() {
  //     expect(r.getQArray(['a']).length).toBe(1);
  //   });
  // });

  // it('require should trigger fn', function() {
  //   var a = {
  //     fn: function () {}
  //   };
  //   spyOn(a, 'fn');
  //   r.require([], a.fn);
  //   expect(a.fn).toHaveBeenCalled();
  // });

  // it('require with requires', function() {
  //   var a = {
  //     fn: function () {}
  //   };
  //   spyOn(a, 'fn');
  //   r.require(['a'], a.fn);
  //   setTimeout(function() {

  //   expect(a.fn).toHaveBeenCalled();
  //   }, 1000);
  // });

  it('require with requires', function() {
    var a = {
      fn: function (a) {
        console.log('fn', a)
        expect(a).toBe(2);
        return a;
      }
    };
    r.require(['a'], a.fn);
  });

  // it('require should trigger 324', function() {
  //   r.require(['a.js'], function (a) {
  //     expect(a).to.equal(1);
  //   });
  // });

  // it('should define a module', function() {
  //   r.define('a', [], function () {
  //     return 1;
  //   });
  //   expect(r.loadModule('a')).to.equal(1);
  // });

  // it('should define a module requires other modules', function() {
  //   r.define('b', [], function () {
  //     return 1;
  //   });
  //   r.define('a', ['b'], function (b) {
  //     return 1;
  //   });
  //   // expect(r.loadModule('a')).to.equal(true);
  // });
  // it('should require modules', function () {
  //   r.define('a', [], function () {
  //     return 1;
  //   });
  //   r.require(['a'], function (a) {
  //     // expect(a).to.equal(1);
  //   });
  // });

});