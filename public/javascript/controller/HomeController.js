'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(MovieService) {
                this.MovieService = MovieService;
                this.movies = MovieService.getAll();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').service('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
