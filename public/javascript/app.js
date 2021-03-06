'use strict';
var app;
(function (app) {
    angular.module('app', ['ngRoute', 'ngResource'])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        }).when('/details/:id', {
            templateUrl: '/templates/movie_details.html',
            controller: app.Controllers.MovieDetailsController,
            controllerAs: 'vm'
        })
            .when('/create', {
            templateUrl: '/templates/movie_create.html',
            controller: app.Controllers.MovieCreateController,
            controllerAs: 'vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
