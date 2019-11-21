const config = require('../config');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(422).send({error: 'Неправильный логин или пароль'})
    } else {
        User.getUser(req.body.email, req.body.password).then(({rows}) => {
            // Создаем токен для авторизации (exp + 2 недели)
            let token = jwt.sign({email: rows[0].email}, config.JWT_SECRET, {expiresIn: '2w'});
            res.send({
                user: rows[0],
                _token: token
            });
        }).catch(() => {
            res.status(422).send({error: 'Ошибка базы данных'});
        })
    }
};

exports.register = (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.status(422).send({ error: 'Не заполнены поля' });
        return;
    }
    User.createUser(req.body.email, req.body.password).then(({rows}) => {
        res.send({success: true})
    }).catch(err => {
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(422).send({error: 'Пользователь с таким емаил уже существует'})
        } else {
            res.status(422).send({error: 'Ошибка'})
        }
    })
};