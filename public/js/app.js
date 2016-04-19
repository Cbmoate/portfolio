angular.module('portfolio', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('main', {
      url: '/',
      views: {
        '': {
          templateURL: 'views/main.html'
        },
        'nav@main': {
          templateURL: '/views/assets/navBar.html'
        }.
        'body@main': {
          templateURL: '/views/partials/landing-partial.html'
        }
      }
    }) 

    // .state('games', {
    //   url: '/games',
    //   views: {
    //     '': {
    //       templateURL: 'views/main.html'
    //     },
    //     'nav@main': {
    //       templateURL: '/views/assets/nav.html'
    //     }.
    //     'body@main': {
    //       templateURL: '/views/partials/games.html'
    //     }
    //   }
    // })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
  });
