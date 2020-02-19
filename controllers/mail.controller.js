const Mail = require("../models/mail.model.js");


exports.sendMail = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Mail
    const mail = new Mail({
        from: req.body.from,
        to: req.body.to
    });

    Mail.sendMail(mail, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while try to send mail"
            });
    });
}