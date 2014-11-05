if (window.r) {
  console.log('a.js running')
  r.define('a', [], function () {
    return 1;
  });
}