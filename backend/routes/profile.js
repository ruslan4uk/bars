const express = require('express');
const Router = express.Router();

// const Document = require('../models/document');
const authMiddleware = require('../middleware/auth');
const profileController = require('../controllers/profileController');


Router.get('/', (req, res, next) => { authMiddleware(req,res,next) }, (req, res) => {
    profileController.index(req, res);
});

Router.get('/:id', (req, res, next) => { authMiddleware(req, res, next) }, (req, res) => {
    profileController.show(req, res);
});

Router.post('/', (req, res, next) => { authMiddleware(req, res, next) }, (req, res) => {
    profileController.create(req, res);
});

Router.post('/:id', (req, res, next) => { authMiddleware(req, res, next) }, (req, res) => {
    profileController.update(req, res);
});

Router.delete('/:id', (req, res, next) => { authMiddleware(req, res, next) }, (req, res) => {
    profileController.delete(req, res);
});

module.exports = Router;