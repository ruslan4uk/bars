const Document = require('../models/document');

exports.index = (req, res) => {
    Document.all(req.user.id).then(({rows}) => {
        res.send(rows);
    }).catch(err => {
        res.status(422).send({error: 'Error'})
    })
};

exports.show = (req, res) => {
    Document.show(req.params.id, req.user.id).then(({rows}) => {
        if (rows.length > 0) {
            res.send(rows[0]);
        } else res.status(422).send({error: 'Not found'});

    }).catch(err => {
        res.status(422).send({error: 'Error'})
    })
};

exports.create = (req, res) => {
    Document.create(req.user.id, req.body).then(({rows}) => {
        res.send({success: true, insertId: rows.insertId});
    }).catch(err => {
        res.status(422).send({error: 'Error', err})
    })
};

exports.update = (req, res) => {
    Document.update(req.params.id, req.user.id, req.body).then(({rows}) => {
        res.send({success: true})
    }).catch(err => {
        res.status(422).send({error: 'Error', data: err})
    })
};

exports.delete = (req, res) => {
    Document.delete(req.params.id).then(({rows}) => {
        res.send({success: true})
    }).catch(err => {
        res.status(422).send({error: 'Error', data: err})
    })
};