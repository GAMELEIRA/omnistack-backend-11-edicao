const  express = require('express');

const ongController = require('./controllers/ongController.js');

const routes = express.Router();

routes.get('/ongs', ongController.index)

routes.post('/ongs', ongController.create);

module.exports = routes;
