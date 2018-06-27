/* Imports & configuration */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Model definition */
const TapSchema = new Schema({
    author: String,
    userName: String,
    score: Number,
    humanDate: String,
    date: Date,
});


/* Export */
const TapModel = mongoose.model('tap', TapSchema);
module.exports = TapModel;