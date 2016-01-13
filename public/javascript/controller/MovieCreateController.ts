'use strict';
namespace app.Controllers {
    export class MovieCreateController {

        //so we could have  a movie
        public movie = {}

        public createMovie() {
            this.MovieService.save(this.movie).then((res) => {
                //redirect to home page
                this.$location.path('/');
            })

        }


        constructor(private MovieService: app.Services.MovieService,
                    private $location: ng.ILocationService) {

        }
    }
    angular.module('app').controller('MovieCreateController', MovieCreateController);
}
