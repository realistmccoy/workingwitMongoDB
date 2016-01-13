'use strict';
var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true, trim: true },
    year: Number
});
exports.Movie = mongoose.model('Movie', MovieSchema);
