module.exports = {
  url: "/users",
  template: `
    <h2>{{title}}</h2>
    <table class="table table-striped table-hover ">
      <tr thead-row></tr>
      <tr tr-row ng-repeat="row in data"></tr>
    </table>
  `,
  controller: function($scope, $http) {
    $scope.title = "ユーザー管理"
    $scope.data = []
    $http.get("/api/users")
    .then(function(response){
      $scope.data = response.data
      // $scope.$apply()
    })
  }
}
