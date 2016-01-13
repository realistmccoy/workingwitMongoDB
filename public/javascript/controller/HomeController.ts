'use strict';

namespace app.Controllers{
    export class HomeController {
        public movies;

        constructor(private MovieService: app.Services.MovieService) {
            this.movies = MovieService.getAll();
        }
    }
    angular.module('app').service('HomeController',HomeController);
}
