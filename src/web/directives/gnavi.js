module.exports = function() {
  return {
    restrict: `E`,
    template: `
      <ul class="nav navbar-nav">
        <li ng-repeat="page in pages">
          <a ui-sref="{{page}}">{{page}}</a>
        </li>
      </ul>
    `,
    controller: function($scope, sitemap) {
      $scope.pages = Object.keys(sitemap.getAll())
    }
  }
}
