
module.exports = app => {
    const file = require('../controllers/file.controller');

    app.put("/file", (req, res) => {
        file.renameFile(req);
        res.json({message: "Le renommage c'est bien passé"});
        res.end()
    });

    app.delete("/file", (req, res) => {
        file.delete(req);
        res.json({message: "Le fichier " + req.body.name + " est bien supprimé"});
        res.end()
    });

    app.put("/moveFile", (req, res) => {
        file.move(req);
        res.json({message: "Fichier déplacé"});
        res.end()
    })
};
