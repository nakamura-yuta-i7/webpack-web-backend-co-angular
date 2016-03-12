module.exports = {
  url: "/samples",
  template: `
    <h3>samples</h3>
    <div ui-view></div>
  `,
  controller: function(clientId) {
    console.log( clientId );
  },
  controllerAs: "samples"
}
