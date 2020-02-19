const Siren = require('../models/siren.model')

exports.find = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Siren.find(req, (err, data) => {
        if (err) throw err;
        else console.log(res.data)
    })
}