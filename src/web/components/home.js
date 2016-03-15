module.exports = {
  url: "/home",
  template: `
    <h2>{{home.title}}</h2>
  `,
  controllerAs: "home",
  controller: function() {
    this.title = "home"
  }
}
