let oplApp = angular.module('oplApp',['ngRoute']);

oplApp.config(function($routeProvider) {
    $routeProvider
       .when('/', {
            controller: 'instrController',
            templateUrl: 'partials/default.html'
        })

        .when('/instructeurs', {
            controller: 'instrController',
            templateUrl: 'partials/instr.html'
        })

        .when('/opleidingen', {
            controller: 'oplController',
            templateUrl: 'partials/opl.html'
        })

        .otherwise({redirectTo: '/'})

});

