module.exports = {
  url: "/home",
  template: `
    <h1>{{home.title}}</h1>
    <nav class="samples">
      <h2 class="title">{{home.samples.title}}</h2>
      <ul>
        <li ng-repeat="item in home.samples.list">
          <a ui-sref="{{item.href}}">{{item.name}}</a>
        </li>
      </ul>
    </nav>
  `,
  controllerAs: "home",
  controller: function() {
    this.title = "home"
    this.samples = {
      title: "samples",
      list: [
        { name: "co", href: "samples.co" }
      ]
    }
  }
}
