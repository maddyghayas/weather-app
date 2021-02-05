const geoCode = require('./util/geoCode')
const forecast = require('./util/forecast')
const apiError = require('./error/ApiError')

//TODO: improvise the code
const weatherAPI = async (req) => {
    try {
        const response = [];
        const geoResponse = await geoCode(req);
        const data = geoResponse.data;
        await Promise.all(
            data.features.map(async (test) => {

                const [latitude, longitude] = test.center;
                const place = test.place_name;
                const {data} =  await forecast(latitude, longitude);
                const currentData = data.current;

                if(currentData !== undefined) {
                    response.push({
                        currentTemperature: currentData.temperature,
                            feelsLike: currentData.feelslike,
                        place
                    })
                }

            })
        )
        if (response.length == 0) {
            return (apiError.serverError(`Record not found for location ${req}. Please enter valid location`));
        }
        return {
            code: 200,
            data: response
        }
    } catch (error) {
        console.log(error);
       return  ({
           code: 500,
           message: 'Internal server error',
       });
    }

}

module.exports = weatherAPI;