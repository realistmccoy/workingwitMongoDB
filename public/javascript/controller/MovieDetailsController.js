'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MovieDetailsController = (function () {
            function MovieDetailsController(MovieService, $routeParams, $location) {
                this.MovieService = MovieService;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.movie = this.MovieService.getMovie($routeParams['id']);
            }
            MovieDetailsController.prototype.deleteMovie = function () {
                var _this = this;
                this.MovieService.deleteMovie(this.$routeParams['id']).then(function (res) {
                    _this.$location.path('/');
                });
            };
            return MovieDetailsController;
        }());
        Controllers.MovieDetailsController = MovieDetailsController;
        angular.module('app').controller('MovieDetailsController', MovieDetailsController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
