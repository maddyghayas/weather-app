const axios = require('axios')

const encodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

const geoCode = (location) => {

        return axios.get(encodeURL + location +
        '.json?access_token=pk.eyJ1IjoibWFkZWVoYWciLCJhIjoiY2tqc2N2cGsxM3lhdzJ4bzdkMms2NmpzaCJ9.qRIlgedBiGGpXHb6AYDOjQ', {
        params: {
            limit: 1
        }
    })
}

module.exports = geoCode;