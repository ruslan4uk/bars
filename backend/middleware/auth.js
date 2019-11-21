const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Проверяем токен на валидность
// А так же пользователя на существование

// retutn user object in req.user

let auth = (req, res, next) => {
    if(req.headers && req.headers.authorization) {
        jwt.verify(req.headers.authorization.substring(7), config.JWT_SECRET, (err, decode) => {
            try {
                User.getUser(decode.email).then(({ rows }) => {
                    if(decode.email === rows[0].email) {
                        req.user = rows[0];
                        next();
                    } else  res.status(401).send({ error: 'User not found' })
                }).catch(err => { res.status(401).send({ error: 'User not found' }) })
            } catch(err) {
                res.status(401).send({ error: 'Access denied' })
            }
        });
    } 
    else res.status(401).send({ error: 'Access denied' })
};

module.exports = auth;