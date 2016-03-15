module.exports = {
  url: "/co",
  template: `
    <h4>co</h4>
    <div ng-repeat="yuta in yutas track by $index">
      {{yuta}}
    </div>
    <pre><code>const co = require("co")
co(function * () {
  $scope.yutas = [];
  $scope.yutas.push( yield getYutaAsync() )
  $scope.$apply()
  
  $scope.yutas.push( yield getYutaAsync() )
  $scope.$apply()
  
  $scope.yutas.push( yield getYutaAsync() )
  $scope.$apply()
  
  $scope.yutas.push( yield getYutaAsync() )
  $scope.$apply()
  
  $scope.yutas.push( yield getYutaAsync() )
  $scope.$apply()
  
})

global.Promise = require("bluebird")
function getYutaAsync() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Yuta")
    }, 1000)
  })
}
  `,
  controller: function($scope) {
    sample1($scope)
  }
}


function sample1($scope) {
  const co = require("co")
  co(function * () {
    $scope.yutas = [];
    $scope.yutas.push( yield getYutaAsync() )
    $scope.$apply()
    
    $scope.yutas.push( yield getYutaAsync() )
    $scope.$apply()
    
    $scope.yutas.push( yield getYutaAsync() )
    $scope.$apply()
    
    $scope.yutas.push( yield getYutaAsync() )
    $scope.$apply()
    
    $scope.yutas.push( yield getYutaAsync() )
    $scope.$apply()
    
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
