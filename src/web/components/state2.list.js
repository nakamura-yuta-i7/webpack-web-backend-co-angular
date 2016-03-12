module.exports = {
  url: "/list",
  template: `
    <h3>List of State 2 Things</h3>
    <ul>
      <li ng-repeat="thing in things">{{ thing }}</li>
    </ul>
  `,
  controller: function($scope) {
    $scope.things = ["A", "Set", "Of", "Things"];
  }
}
