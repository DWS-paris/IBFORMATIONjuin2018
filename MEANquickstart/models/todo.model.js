/* Imports & configuration */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Schema definition */
const TodoShema = new Schema({
    author: String,
    content: String,
    date: Date,
    isDone: Boolean
});

/* Export */
const TodoModel = mongoose.model('todo', TodoShema);
module.exports = TodoModel;