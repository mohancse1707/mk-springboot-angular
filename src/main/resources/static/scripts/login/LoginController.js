/**
 * Created by Mohan on 01/03/2017.
 */
(function(){
    'use strict';

    angular
        .module('mkrapp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope,$rootScope,$window,$uibModal,$uibModalInstance,$http){
        var vm = this;        
        init();
        vm.message="In LoginController";
        vm.username=null;
        vm.password=null;
        vm.rememberMe=false;

        vm.login = login;
        vm.cancel = cancel;
        function login() {

            var data = "j_username=" + vm.username +
                "&j_password=" +  vm.password +
                "&_spring_security_remember_me=" + vm.rememberMe + "&submit=Login";

            $http.post('app/authentication', data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (response) {
                var test = response.status;
                loggedInUsername();
                $rootScope.isAuthenticated=true;
                $uibModalInstance.close();
            });
        }

        function loggedInUsername() {
            $http.get("app/rest/auth/loggedInAccount", { params: {}
            }).then(function (response) {
                $rootScope.username = response.data.username;
            });
        }
/*
        function genericSuccess (res) {
            return res.data.data; // yes, really.
        }

        function pay (payment) {
            return $http.post('v1/payment/authorize', payment).then(function(success) {
                return genericSuccess(success);
            });
        }*/

        function cancel(){
              $uibModalInstance.dismiss('cancel');
        }
        function init(){
        }

    };

}());