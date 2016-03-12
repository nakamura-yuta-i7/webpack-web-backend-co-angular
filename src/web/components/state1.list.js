module.exports = {
  url: "/list",
  template: `
    <h3>List of State 1 Items</h3>
    <ul>
      <li ng-repeat="item in items">{{ item }}</li>
    </ul>
  `,
  controller: function($scope) {
    $scope.items = ["A", "List", "Of", "Items"];
  }
}
