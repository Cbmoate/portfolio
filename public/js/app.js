angular.module('portfolioApp', [
  'ui.router', 
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'nav@main': {
            templateUrl: '/views/assets/navBar.html'
          },
          'body@main': {
            templateUrl: '/views/partials/landing-partial.html'
          }
        }
      })

      .state('projects', {
        url: '/projects',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'nav@projects': {
            templateUrl: '/views/assets/navBar.html',
            
          },
          'body@projects':{
            templateUrl: '/views/partials/project-partial.html',
          }
        }
      })

      //    .state('working', {
      //   url: '/working',
      //   views: {
      //     '': {
      //       templateUrl: 'views/main.html'
      //     },
      //     'nav@working': {
      //       templateUrl: '/views/assets/nav.html',
            
      //     },
      //     'body@working':{
      //       templateUrl: '/views/partials/working-partial.html',
      //     }
      //   }
      // })



    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);