module.exports = {
  url: "/promise",
  template: `
    <h4>{{title}}</h4>
    <ul class="panel panel-default">
      <li ng-repeat="user in users">
        {{user}}
      </li>
    </ul>
    <div ng-show="show_panel" class="panel panel-default">
      <div class="panel-heading">{{"Promise Demo"}}</div>
      <div class="panel-body">
        {{angular}}<br>
        {{myPromise}}<br>
        {{thenableEnd}}
      </div>
    </div>
    
    <pre class="panel panel-default"><code>
      $http.get("/api/users")
      .then(function(response) {
        $scope.users = response.data
        $scope.angular = "$http.get('/api/users')"
      })
      .then(function() {
        $scope.show_panel = true
        return (function runMyPromise() {
          return new Promise(function(resolve, reject) {
            setTimeout(()=>{
              $scope.myPromise = "require('bluebird')"
              $scope.$apply()
              resolve()
            }, 1000)
          })
        })()
      })
      .then(function() {
        $scope.thenableEnd = "thenableEnd"
      })
    </code></pre>
  `,
  controller: function($scope, $http) {
    $scope.title = "promise"
    
    $http.get("/api/users")
    .then(function(response) {
      $scope.users = response.data
      $scope.angular = "$http.get('/api/users')"
    })
    .then(function() {
      $scope.show_panel = true
      return (function runMyPromise() {
        return new Promise(function(resolve, reject) {
          setTimeout(()=>{
            $scope.myPromise = "require('bluebird')"
            $scope.$apply()
            resolve()
          }, 1000)
        })
      })()
    })
    .then(function() {
      $scope.thenableEnd = "thenableEnd"
    })
  }
}
