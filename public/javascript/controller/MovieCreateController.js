'use strict';
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MovieCreateController = (function () {
            function MovieCreateController(MovieService, $location) {
                this.MovieService = MovieService;
                this.$location = $location;
                this.movie = {};
            }
            MovieCreateController.prototype.createMovie = function () {
                var _this = this;
                this.MovieService.save(this.movie).then(function (res) {
                    _this.$location.path('/');
                });
            };
            return MovieCreateController;
        }());
        Controllers.MovieCreateController = MovieCreateController;
        angular.module('app').controller('MovieCreateController', MovieCreateController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
