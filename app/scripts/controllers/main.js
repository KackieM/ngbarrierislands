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
    		latitude: 32.842271,
    		longitude: -79.860806,
            message:'Shem Creek - Home of The Iron Yard'
    	},
    	zoom: 8
    }

    $scope.marker = {
    	coords: {
    		latitude: 32.842271,
    		longitude: -79.860806,
    		message: 'marker 1'
    	}
    }

    $scope.markerList = [
    	{
    		latitude: 32.8007336,
    		longitude: -79.7646715,
    		message: 'IOP'
    	},
    	{
    		latitude: 32.940138,
    		longitude: -79.657388,
    		message: 'Awendaw'
    	},
    	{
    		latitude: 32.3164625,
    		longitude: -80.4945008,
    		message: 'marker 4'
    	},
    	{
    		latitude: 32.6526523,
    		longitude: -79.9481098,
    		message: 'Folly'
    	},
    	{
    		latitude: 32.3650467,
    		longitude: -80.4545612,
    		message: 'St. Helena'
    	},
    	{
    		latitude: 32.1894928,
    		longitude: -80.7488113,
    		message: 'Hilton Head'
    	},
    	
    	{
    		latitude: 32.565651,
    		longitude: -80.3089455,
    		message: 'Edisto'
    	},
    	
    	{
    		latitude: 32.4837918,
    		longitude: -80.4028803,
    		message: 'Fripp Island'
    	},




    	]

  });
