const Document = require('../models/document');

exports.index = (req, res) => {
    Document.allGuest().then(({rows}) => {
        res.send(rows);
    }).catch(err => {
        res.status(422).send({error: 'Error'})
    })
};