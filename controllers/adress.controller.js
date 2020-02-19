const Adress = require('../models/adress.model');

exports.find = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.data);

    Adress.find(req.body.infos, (err, data) => {
        if (err) throw err;
        else console.log(res.data)
    })
};