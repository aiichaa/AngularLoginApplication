/**
 * Created by InFo on 07/12/2016.
 */
(function () {

    angular
        .module("loginApp",["ngRoute"]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/profile', {
                templateUrl: '/profile/profile.view.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
          }

    angular
        .module('loginApp')
        .config(['$routeProvider', config]);

})();