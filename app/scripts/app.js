'use strict';

angular.module('ngbarrierislandsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/postcards', {
        templateUrl: 'views/postcards.html',
        controller: 'MainCtrl'
      })
      .when('/scbarrierislands', {
        templateUrl: 'views/scbarrierislands.html',
        controller: 'MainCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'MainCtrl'
      })
      .when('/edisto', {
        templateUrl: 'views/edisto.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
