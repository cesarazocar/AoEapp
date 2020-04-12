const request = require('request');



async function get(req, res) {
    return res.status(404).send({
        message: 'Data not found',
        success: false
    })

}

async function post(req, res) {

    return res.status(404).send({
        message: 'Data not found',
        success: false
    })
}


async function getUnits(req, res) {

    console.log('getUnits')

    var url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/units';

    request.get({
        url: url,
        json: true,
        //headers: { 'User-Agent': 'request' }
    }, (err, result, data) => {
        if (err) {
            console.log('Error:', err);
            return res.status(500).send({
                    message: 'Server internal error',
                    error: error,
                    success: false
                })
                // return res.status(404).send({
                //     message: 'Data not found',
                //     success: false
                // })
        } else if (result.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            // data is already parsed as JSON:
            //console.log(data);

            console.log(data.units.length) //total de unidades

            return res.status(200).send({
                message: "Data found",
                data: data,
                success: true
            })

        }
    });

}

async function getCivs(req, res) {

    console.log('getUnits')

    var url = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';

    request.get({
        url: url,
        json: true,
        //headers: { 'User-Agent': 'request' }
    }, (err, result, data) => {
        if (err) {
            console.log('Error:', err);
            return res.status(500).send({
                    message: 'Server internal error',
                    error: error,
                    success: false
                })
                // return res.status(404).send({
                //     message: 'Data not found',
                //     success: false
                // })
        } else if (result.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            console.log(data.civilizations.length) //total de unidades
            console.log(data);

            return res.status(200).send({
                message: "Data found",
                data: data,
                success: true
            })

        }
    });

}

module.exports = {
    getUnits,
    getCivs,
    post,
}