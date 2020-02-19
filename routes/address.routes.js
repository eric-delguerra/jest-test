module.exports = app => {
    const address = require('../models/adress.model')

    app.get("/address", (req, res) => {
        address.find(req).then((result) => {
            res.json(result)
            res.end()
        })

    })
}