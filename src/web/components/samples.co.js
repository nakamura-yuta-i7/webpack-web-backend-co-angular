module.exports = {
  url: "/co",
  template: `
    <h4>co</h4>
    <div>{{yuta}}</div>
    <pre><code>const co = require("co")
co(function *() {
  const yuta = yield getYutaAsync()
  console.log( yuta )
})

global.Promise = require("bluebird")
function getYutaAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Yuta")
    }, 1000)
  })
}</code></pre>
  `,
  controller: function($scope) {
    sample1($scope)
  }
}


function sample1($scope) {
  const co = require("co")
  co(function * () {
    const yuta = yield getYutaAsync()
    $scope.yuta = "中村祐太"
    $scope.$apply()
    console.log( $scope.yuta );
  })

  global.Promise = require("bluebird")
  function getYutaAsync() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Yuta")
      }, 1000)
    })
  }
}
