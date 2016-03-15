$(function() {
  $.material.init()
})

// Angular
global.myApp = angular.module('myApp', ['ui.router'])

// サービス


// ファクトリー


// プロバイダ
var SitemapProvider = require("./providers/sitemap")
myApp.provider("sitemap", SitemapProvider )

// ディレクティブ
myApp.directive("appHeader", require("./directives/app-header") )
myApp.directive("gnavi", require("./directives/gnavi") )
myApp.directive('trRow', function () {
    return {
        template: 
          `<tr>
            <td ng-bind="row.id"></td>
            <td ng-bind="row.name"></td>
          </tr>`
    };
});
myApp.directive('theadRow', function () {
    return {
        template: 
          `<th ng-repeat="(k, v) in data[0]">{{k}}</td>`,
        scope: false,
    };
});

// ルーティング
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, sitemapProvider) {
  
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise("home")
  
  // サイトマップからルーティングを設定
  sitemapProvider
    .$get()
    .generateStateAll()
    .forEach(state=>{
      var component_path = require(`./components/${state}`)
      $stateProvider.state(state, component_path )
    })
  
  // $stateProvider
  //   .state('home',        require("./components/home") )
  //   .state('samples',     require("./components/samples") )
  //   .state('samples.co',  require("./components/samples.co") )
  //   .state('state1',      require("./components/state1") )
  //   .state('state1.list', require("./components/state1.list") )
  //   .state('state2',      require("./components/state2") )
  //   .state('state2.list', require("./components/state2.list") )
})
