const express = require('express');
const Router = express.Router();
const documentController = require('../controllers/documentController');

Router.get('/', (req, res) => {
    documentController.index(req, res)
});

module.exports = Router;