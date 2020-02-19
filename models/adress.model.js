const Adress = () => {

}

Adress.find = (info) => {
    return new Promise(((resolve, reject) => {
        const axios = require('axios')
        axios.get('https://api-adresse.data.gouv.fr/search/?q=' + info.body.infos.replace(/ /g,"+"))
            .then(function (response) {
                console.log(response.data.features[0].properties.name)
                console.log(response.data.features[1].properties.name)
                if (response.data != undefined) {
                    resolve(response.data)
                } else {
                    reject()
                }
            })
    }))


}


module.exports = Adress