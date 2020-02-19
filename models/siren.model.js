const Siren = () => {};

Siren.find = (info) => {
    return new Promise(((resolve, reject) => {
        const axios = require('axios');
        let sirenNum = (info.body.siren).replace(/ /g,"");
        axios.get('https://api.insee.fr/entreprises/sirene/V3/siren/' + sirenNum + "?masquerValeursNulles=true",
            {headers: {
                    'Authorization': 'Bearer d3fe76e8-d712-3d0d-96b5-4f631387b82b'
                }})
            .then(function (response) {
                if (response.data != undefined) {
                    resolve(response.data)
                } else {
                    reject()
                }
            })
    }))
};

module.exports = Siren;