(function(){
    'use strict';

    angular.module('mkrapp', ['ui.bootstrap','ui.router'])
        .config(function($stateProvider, $urlRouterProvider,$locationProvider) {

        $locationProvider.hashPrefix('');

        $urlRouterProvider.otherwise('/');   
        $stateProvider.state('site', {
            'abstract': true,
            views: {
            'navbar@': { 
                templateUrl: 'views/navbar/navbar.html'
                }  
            }          
        });
    });
}());