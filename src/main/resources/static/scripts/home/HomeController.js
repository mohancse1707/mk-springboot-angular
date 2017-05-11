/**
 * Created by s726337 on 01/03/2017.
 */
(function(){
    'use strict';

    angular
        .module('mkrapp')
        .controller('HomeController', HomeController);


    function HomeController($scope,$window,$http,$uibModal,$log){
        var vm = this;
        init();

        vm.loginModal=loginModal;
        vm.logoutModal = logoutModal;
        vm.message = "HomeController";

        function init(){

        };

        function loginModal(){
  
         var modalInstance =  $uibModal.open({
                templateUrl: 'views/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login',
                backdrop: 'static',
                resolve: {
                    input: function () {
                        return "empt";
                    }
                }
		    });

            modalInstance.result.then(function (paramFromDialog) {
                vm.paramFromDialog = paramFromDialog;
                $log.info("loginModal paramFromDialog result "+ vm.paramFromDialog)
            });
        };


        function logoutModal(){

            var modalInstance =  $uibModal.open({
                templateUrl: 'views/logout/logout.html',
                controller: 'LogoutController',
                controllerAs: 'logoutCtrl',
                backdrop: 'static',
                resolve: {
                    input: function () {
                        return "empt";
                    }
                }
            });

            modalInstance.result.then(function (paramFromDialog) {
                vm.paramFromDialog = paramFromDialog;
                $log.info("logoutModal paramFromDialog result "+ vm.paramFromDialog)
            });
        };


    };

}());