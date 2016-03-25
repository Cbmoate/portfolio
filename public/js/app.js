angular.module('exercise1'), ['ngRoute']
  .config(['$routeProvider', '$locationProvider'], function($routeProvider, $locationProvider
    $routeProvider
    .when('/first', {
      templateUrl: 'first.html'
    })
    .when('/second', {
      templateUrl: 'second.html'
    })
    .when('/third',{
      templateUrl: 'third.html'
    })
    .when('/fourth',{
      templateUrl: 'fourth.html'
    })
    .when('/fifth', {
      templateUrl: 'fifth.html'
    });

    $locationProvider.html5Mode(true);
  )])
  