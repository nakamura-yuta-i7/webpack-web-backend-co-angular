var sitemap = require("../../common/sitemap")

module.exports = function() {
  return {
    $get: function() {
      return new Sitemap()
    }
  }
}

class Sitemap {
  constructor() {
    console.log( "new Sitemap" );
    this.sitemap = sitemap
  }
  showAll() {
    console.log( "showAll", this.sitemap );
  }
  getAll() {
    return this.sitemap
  }
  get(key) {
    return this.sitemap[key]
  }
  generateStateAll() {
    
    return parseSitemap(this.sitemap)
    
    function parseSitemap(obj) {
      var states = []
      var pages = Object.keys(obj)
      pages.forEach( page =>{
        states.push(page)
        if ( "childs" in obj[page] ) {
          parseSitemap(obj[page]["childs"])
          .forEach(child=>{
            var state = `${page}.${child}`
            states.push(state)
          })
        }
      })
      return states
    }
  }
}
