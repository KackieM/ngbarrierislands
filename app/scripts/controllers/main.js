'use strict';

angular.module('ngbarrierislandsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
    	center: {
    		latitude: 45,
    		longitude: -73
    	},
    	zoom: 8
    }

    $scope.marker = {
    	coords: {
    		latitude: 45,
    		longitude: -73
    	}
    }

    $scope.markerList = [
    	{
    		latitude: 45,
    		longitude: -74
    	},
    	{
    		latitude: 46,
    		longitude: -75
    	},
    	{
    		latitude: 47,
    		longitude: -76
    	},
    	{
    		latitude: 48,
    		longitude: -77
    	},
    	{
    		latitude: 49,
    		longitude: -78
    	},




    	]

  });
