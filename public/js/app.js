angular
  .module('portfolio', [
    'ui.router'
    ])
    .config(['$urlRouterProvider', "$stateProvider"], function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateURL: 'home.html',
        children: [
        {
          name: ''
        }]
      }) 
    });
