const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    available: Boolean
})

module.exports.Book = mongoose.model('Book', bookSchema)