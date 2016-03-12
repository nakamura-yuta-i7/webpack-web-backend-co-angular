module.exports = function() {
  return {
    restrict: `E`,
    template: `
      <nav>
        <ul>
          <li><a ui-sref="home">home</a></li>
          <li><a ui-sref="samples">samples</a></li>
          <li><a ui-sref="state1">state1</a></li>
          <li><a ui-sref="state2">state2</a></li>
        </ul>
      </nav>
    `
  }
}
