'use strict';

import mongoose = require('mongoose');

// _id is built in, you do not have to define it
let MovieSchema = new mongoose.Schema({
    title: {type:String,require:true,unique:true,trim:true},
    year: Number


});

export let Movie = mongoose.model('Movie', MovieSchema);
