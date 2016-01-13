var app;
(function (app) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.MovieResource = $resource('/api/v1/movies/:id');
            }
            MovieService.prototype.getAll = function () {
                return this.MovieResource.query();
            };
            ;
            MovieService.prototype.getMovie = function (movieId) {
                return this.MovieResource.get({ id: movieId });
            };
            MovieService.prototype.save = function (movie) {
                return this.MovieResource.save(movie).$promise;
            };
            MovieService.prototype.deleteMovie = function (movieId) {
                return this.MovieResource.delete({ id: movieId }).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('app').service('MovieService', MovieService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
