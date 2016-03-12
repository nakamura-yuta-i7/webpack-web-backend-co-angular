global.myApp = angular.module('myApp', ['ui.router'])

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("home")
  $stateProvider
    .state('home',        require("./components/home") )
    .state('state1',      require("./components/state1") )
    .state('state1.list', require("./components/state1.list") )
    .state('state2',      require("./components/state2") )
    .state('state2.list', require("./components/state2.list") )
})
