'use strict';
var express = require('express');
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var router = express.Router();
router.get('/', function (req, res, next) {
    Movie.find({}).exec(function (err, movies) {
        if (err)
            return next(err);
        res.json(movies);
    });
});
router.get('/:id', function (req, res, next) {
    console.log("req.params.id === " + req.params.id);
    Movie.findOne({ _id: req.params.id }).exec(function (err, movie) {
        if (err)
            return next(err);
        if (!movie)
            return next({ message: 'could not find the movie you watned.', status: 404 });
        res.send(movie);
    });
});
router.post('/', function (req, res, next) {
    if (!req.body.title)
        return res.status(400).send({ message: "Please include all required fields" });
    var new_movie = new Movie(req.body);
    new_movie.save(function (err, movie) {
        if (err)
            return next(err);
        if (!movie)
            return next({ err: "Movie could not be created." });
        res.send(movie);
    });
});
router.delete('/:id', function (req, res, next) {
    Movie.remove({ _id: req.params.id }, function (err, result) {
        if (err)
            return next(err);
        res.send({ message: "success!" });
    });
});
module.exports = router;
