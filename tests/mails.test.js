describe("Test envoie d'un mail", () => {
    it('Doit recevoir le message "Mail envoyé"', function () {
        let mailTestSend = require('../models/mail.model');
        let adress = {from: "test@test.com", to: "test@test.fr"};
        mailTestSend.sendMail(adress, false)
    });
})