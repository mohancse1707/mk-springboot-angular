(function() {
    'use strict';

    angular.module('mkrapp')
    .config(function ($stateProvider) {
        $stateProvider
        .state('home', {
            parent: 'site',
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'views/home/home.html',
                    controller: 'HomeController'
                }
            }
        });
    });
})();