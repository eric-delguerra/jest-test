let fs = require('fs');
let callback = function (err) {
    if (err) throw err
};


const File = function (file) {
    this.name = file.name
};

File.rename = (req) => {
    let str = req.body.name;

    fs.rename("./files/" + (req.body.name).toLowerCase(), "./files/" + (req.body.newName).toLowerCase() + "." + str.split('.')[1].toLowerCase(), function (err) {
        if (err) throw err;
        console.log("Fichier renommé")
    })
};

File.delete = (req) => {
    fs.unlink('./files/' + req.name, (err) => {
        if (err) throw err;
        console.log(req.name + " supprimé")
    })
};

File.move = (req) => {
    let oldPath = './files/' + req.name;
    let newPath = './MovingFiles/' + req.name;

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            if (err.code === 'EXDEV') {
                copy();
            } else {
                callback(err);
            }
            return;
        }
        callback();
    });

    function copy() {
        let readStream = fs.createReadStream(oldPath);
        let writeStream = fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', function () {
            fs.unlink(oldPath, callback);
        });

        readStream.pipe(writeStream);
    }
};

module.exports = File;