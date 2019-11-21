const mysql = require('mysql2');
const config = require('../config');

const pool = mysql.createPool({
    host: config.DB.HOST,
    user: config.DB.USER,
    password: config.DB.PASSWORD,
    database: config.DB.DATABASE,
});

const db = (query) => {
    return new Promise((resolve, reject) => {
        pool.promise().query(query).then(([rows, fields]) => {
            resolve({rows, fields})
        }).catch(err => {
            reject(err);
        })
    });
};

// const con = new Promise((resolve, reject) => {
//     pool.getConnection((err, connection) => {
//         err ? reject(err) : resolve(connection);
//     })
// });


// let db = (query) => {
//     return new Promise((resolve, reject) => {
//         pool.then((connection) => {
//             connection.query(query, (err, rows, fields) => {
//                 err ? reject(err) : resolve({rows, fields})
//             });
//         }).catch(err => {
//             reject(err);
//         })
//     })
// };

module.exports = db;