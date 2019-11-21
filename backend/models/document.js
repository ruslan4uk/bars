const db = require('../db');

exports.allGuest = () => {
    return db('SELECT * FROM documents');
};

exports.all = (user_id) => {
    return db(`SELECT * FROM documents WHERE user_id = '${user_id}'`);
};

exports.show = (id, user_id) => {
    return db(`SELECT * FROM documents WHERE id = '${id}' AND user_id = '${user_id}'`);
};

exports.create = (user_id, data) => {
    return db(`INSERT INTO documents(user_id, number, name, note, created_at) 
                VALUE ('${user_id}', '${data.number}', '${data.name}', '${data.note}', '${data.created_at}')`);
};

exports.update = (id, user_id, data) => {
    return db(`UPDATE documents SET name = '${data.name}', note = '${data.note}', number = '${data.number}', created_at = '${data.created_at}' 
                WHERE user_id = '${user_id}' AND id = '${id}'`);
};

exports.delete = (id) => {
    return db(`DELETE FROM documents WHERE id = '${id}'`);
};
