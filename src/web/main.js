global.myApp = angular.module('myApp', ['ui.router'])
myApp.value("sitemap", {
  home: {},
  samples: {
    co: {}
  },
  state1: {},
  state2: {},
})
myApp.directive("gnavi", require("./directives/gnavi.js") )


myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise("home")
  
  $stateProvider
    .state('home',        require("./components/home") )
    .state('samples',     require("./components/samples") )
    .state('samples.co',  require("./components/samples.co") )
    .state('state1',      require("./components/state1") )
    .state('state1.list', require("./components/state1.list") )
    .state('state2',      require("./components/state2") )
    .state('state2.list', require("./components/state2.list") )
})
