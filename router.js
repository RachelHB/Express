
const express = require('express');
const router = express.Router();

const book = require ('./bookController')

// create different routes
//create each route for id, create, ...

router.get('/book', book.index)
router.get('/book/type/:type', book.sort) //return book by id
router.get('/book/:id', book.show) //return book by id
router.post('/book/create', book.create) //create books
router.delete('/book/:id', book.delete) //delete book by id
router.put('/book/:id', book.update) //edit books by id

module.exports = router;