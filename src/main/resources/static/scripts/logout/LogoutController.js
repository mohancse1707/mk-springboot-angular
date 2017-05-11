/**
 * Created by s726337 on 25/04/2017.
 */

(function() {
    'use strict';

    angular.module('mkrapp')
        .controller('LogoutController',LogoutController);

    function LogoutController($state,$scope,$rootScope,$window,$uibModal,$uibModalInstance,$http){

        var vm = this;

        vm.message="In LogoutController";
        vm.logout = logout;

        function logout(){
            $http.get("app/logout").then(function (response){
                var status = response.status;
                $state.go("home");
                $rootScope.username='';
                $rootScope.isAuthenticated=false;
                $uibModalInstance.close();
            })
        }


    }

}());