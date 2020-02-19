module.exports = app => {
    const mail = require("../controllers/mail.controller.js");

    app.post("/mail", function (req, res) {
        mail.sendMail(req)
        res.json({message: "Le mail à bien été envoyé à " + req.body.to})
        res.end()
    })
};