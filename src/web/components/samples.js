module.exports = {
  url: "/samples",
  template: `
    <h2>samples</h2>
    <ul>
      <li ng-repeat="page in samples.pages">
        <a ui-sref="samples.{{page}}">{{page}}</a>
      </li>
    </ul>
    <div ui-view></div>
  `,
  controller: function(sitemap) {
    this.pages = Object.keys(sitemap.get("samples").childs)
  },
  controllerAs: "samples"
}
