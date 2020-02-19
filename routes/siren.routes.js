module.exports = app => {
    const siren = require('../models/siren.model')

    app.get("/siren", async (req, res) => {
        try {
            siren.find(req).then((result) => {
                res.json({"response" : result.header.statut,"name": result.uniteLegale.sigleUniteLegale, "denomination" : result.uniteLegale.periodesUniteLegale[0].denominationUniteLegale})
                res.end()
            })
        } catch (err) {
            console.log(err)
        }

    })
}