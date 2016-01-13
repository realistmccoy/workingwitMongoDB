'use strict';

import express = require('express');
let mongoose = require('mongoose');
let Movie = mongoose.model('Movie');
let router = express.Router();
//BASE route is /api/v1/movies

//GET: /api/v1/movies
router.get('/', (req, res, next) => {
    //find all movies in the MongoDB
    //param says "find all objects where "this" mathes"
    //empty objects says "find everything"
    Movie.find({}).exec((err, movies) => {
        //if there is an error, exit the function and deal with it
        if (err) return next(err);
        res.json(movies);
    });
});
//GET /api/v1/movies/:movieId
router.get('/:id', (req, res, next) => {
    console.log(`req.params.id === ${req.params.id}`);
    //finOne returns an object
    //req.params.id is the movies ID passes in form the service
    // findOne movie where its _id is equal to the req.params.id
    Movie.findOne({ _id: req.params.id }).exec((err, movie) => {
        if (err) return next(err);
        if (!movie) return next({ message: 'could not find the movie you watned.', status: 404 });
        res.send(movie);
    })
});

//POST: api/v1/MovieService
router.post('/', (req, res, next) => {
    if(!req.body.title) return res.status(400).send({message:"Please include all required fields"});
    //
    let new_movie = new Movie(req.body);
    new_movie.save((err, movie) => {
        //if there is an error... exit the function, and pass the errror along
        if (err) return next(err);
        // if the movie could not be created.. exit the function and pass a custom error along
        if (!movie) return next({ err: "Movie could not be created." });
        //otherwise the movie has benen created, and everything is ok!
        //movie is the 'sresult param onthe mongooose.save function'
        res.send(movie);
    });
});
//DELETE: /api/v1/movies/:movieId
router.delete('/:id', (req, res, next) => {
    //look at get(/:id)for help
    //removes all objects that math this objesct
    Movie.remove({ _id: req.params.id }, (err, result) => {
        if (err) return next(err);
        res.send({ message: "success!" });
    });
});
export = router;
