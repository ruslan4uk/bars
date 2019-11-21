const express = require('express');
const Router = express.Router();

const authController = require('../controllers/authController')

// Авторизуем пользователя
Router.post('/login', (req, res) => {
    authController.login(req, res);
});

// Регистрация пользователя
Router.post('/register', (req, res) => {
    authController.register(req, res);
});

module.exports = Router;