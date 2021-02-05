const axios = require('axios')

require('dotenv').config()

const forecastURL = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_ACCESS_KEY}&query=`;

const forecast =  (latitude, longitude) => {
    const url = `${forecastURL}${latitude},${longitude}`
    return axios.get(url);

}

module.exports = forecast;