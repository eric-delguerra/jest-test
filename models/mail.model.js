const mailConfig = require('../config/mail.config.js');
const mailjet = require('node-mailjet')
    .connect(mailConfig.MJ_APIKEY_PUBLIC, mailConfig.MJ_APIKEY_PRIVATE);

const Mail = function (mail) {
    this.from = mail.from;
    this.to = mail.to;
};

Mail.sendMail = (mail, test = true) => {

    const request = mailjet
        .post("send", {'version': 'v3.1','perform_api_call': test})
        .request({
            "Messages":[
                {
                    "From": {
                        "Email": mail.from,
                        "Name": "Jérémie"
                    },
                    "To": [
                        {
                            "Email": mail.to,
                            "Name": "Jérémie"
                        }
                    ],
                    "Subject": "Greetings from Mailjet.",
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
            return{message: "Mail envoyé"}

        })
        .catch((err) => {
            console.log(err.statusCode)
        })

};

module.exports = Mail;
