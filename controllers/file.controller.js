const File = require("../models/file.model")

exports.renameFile = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const file = new File({
        name: req.body.name
    });

    File.rename(req, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Le renommage n'a pas fonctionné"
            });
    })
};

exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const file = new File({
        name: (req.body.name).toLowerCase()
    });

    File.delete(file, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "La suppression à échouée"
            });
    })
};

exports.move = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const file = new File({
        name: (req.body.name).toLowerCase()
    });

    File.move(file, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "On ne peut pas déplacer le fichier"
            });
    })
};