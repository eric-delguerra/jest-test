const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const path = require('path');
const moment = require('moment');

const compile = async function(data) {
    const filePath = path.join(process.cwd(), 'files', 'templates', 'invoice-template.hbs');
    const html = await fs.readFile(filePath, 'utf-8');
    return hbs.compile(html)(data)
};

hbs.registerHelper('dateFormat', function (value, format) {
    return moment(value).format(format)
});

exports.createPdf = (req, res) => {
    (async () => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const content = await compile(req.body);

            await page.setContent(content);
            await page.emulateMedia('screen');
            await page.pdf({
                path: './files/pdf/mypdf.pdf',
                format: 'A4',
                printBackground: true
            });

            console.log('done');
            await browser.close();
        } catch (e) {
            console.log('Il y a une erreur' + e)
        }
    })();
};
