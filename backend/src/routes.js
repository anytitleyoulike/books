const express = require('express');

const routes = express.Router();

const BookController = require('./controllers/BookController');

routes.get('/books', BookController.index);

module.exports = routes;