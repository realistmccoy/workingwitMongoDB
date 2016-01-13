'use strict';

namespace app.Controllers{
    export class MovieDetailsController {

        public movie;

        public deleteMovie() {
            this.MovieService.deleteMovie(this.$routeParams['id']).then((res) =>{
                this.$location.path('/');
            })
        }

        constructor(
            private MovieService: app.Services.MovieService,
            private $routeParams: ng.route.IRouteParamsService,
            private $location: ng.ILocationService
        ) {
            //$routeParams is an object, holding all of outr 'route variable'
            //$routeParams.id or $routeParams['id'] is holding the :id found in the app.ts
            this.movie = this.MovieService.getMovie($routeParams['id']);
        }
    }
    angular.module('app').controller('MovieDetailsController', MovieDetailsController);
}
