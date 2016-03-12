module.exports = {
  url: "/home",
  template: `
    <h1>{{home.title}}</h1>
  `,
  controllerAs: "home",
  controller: function() {
    this.title = "home"
  }
}
