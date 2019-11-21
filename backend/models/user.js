const db = require('../db');

// Получаем пользователя
exports.getUser = (email, password = null) => {
    return db(`SELECT * FROM users WHERE email = '${email}'` + (password ? ` AND password = '${password}'` : ``))
};

// Создаем пользователя 
exports.createUser = (email, password) => {
    return db(`INSERT INTO users(email, password) VALUES ('${email}', '${password}')`)
};