const axios = require('axios')

require('dotenv').config()
const config = require('../config.json')

const encodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

const geoCode = (location) => {
        const url = `${encodeURL}${location}.json?access_token=${process.env.GEO_ACCESS_TOKEN}`
        return axios.get(url, {
        params: {
            limit: config.recordLimit
        }
    })
}

module.exports = geoCode;