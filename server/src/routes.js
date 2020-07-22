const express = require('express');
const routes = express.Router();

const EventController = require('./controllers/EventController');

routes.get('/events', EventController.findAll);
routes.post('/events', EventController.create);
routes.put('/events/:id', EventController.update);
routes.delete('/events/:id', EventController.delete);

module.exports = routes;

