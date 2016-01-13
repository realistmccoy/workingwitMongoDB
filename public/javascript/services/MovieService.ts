

namespace app.Services {
    export class MovieService {
        private MovieResource;


        public getAll() {
            return this.MovieResource.query();

                        };

                        public getMovie(movieId)     {
                            return this.MovieResource.get({id:movieId});
                        }

        public save(movie) {
            //POST: /api/v1/movies => { title: str, year:num}
            return this.MovieResource.save(movie).$promise;
        }
        public deleteMovie(movieId){
            return this.MovieResource.delete({id:movieId}).$promise;
        }

        constructor (private $resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/v1/movies/:id');
        }
        
    }
    angular.module('app').service('MovieService',MovieService);
}
