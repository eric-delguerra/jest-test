module.exports = app => {
    const Pdf = require('../controllers/pdf')

    app.get("/pdf", function (req, res) {
        Pdf.createPdf(req);
        res.json({message: "Fichier créer !"})
        res.end()
    })
}