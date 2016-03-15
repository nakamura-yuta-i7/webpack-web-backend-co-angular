module.exports = function() {
  return {
    restrict: `E`,
    template: template
  }
}

var template = `
<div class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
      <a class="navbar-brand" href="/">
        APP:Angular1
      </a>
      
    </div>
    <div class="navbar-collapse collapse navbar-responsive-collapse">
      <gnavi></gnavi>
      
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control col-md-8" placeholder="Search">
        </div>
      </form>
      
    </div>
  </div>
</div>
`
