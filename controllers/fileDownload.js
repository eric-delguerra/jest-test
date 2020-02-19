const fs = require('fs');
const formidable = require('formidable');
const sharp = require('sharp')


module.exports = () => {
    const http = require('http')
    http.createServer(function (req, res) {
        if (req.url === '/fileupload') {

            let form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                let oldpath = files.filetoupload.path;
                let newpath = './files/' + (files.filetoupload.name).toLowerCase().replace(/ /g, "");

                (async () => {
                    await sharp(oldpath)
                        .resize(200)
                        .toFile(newpath)
                    console.log('Fichier uploadé et redimensionné')
                    res.write('Fichier uploadé et redimensionné !');
                    res.end();
                })()

                // fs.rename(oldpath, newpath, function (err) {
                //     if (err) throw err;
                //     console.log('Fichier uploadé')
                //     res.write('Fichier uploadé !');
                //     res.end();
                // });
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
        }
    }).listen(8080);
};