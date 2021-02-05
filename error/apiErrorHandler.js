const ApiError = require("./ApiError");

const apiErrorHandler = (error, req, resp, next) => {
    if (error instanceof ApiError) {
        resp.status(error.code).json(error.message);
    }
    else {
        resp.status(500).json('something went wrong.');
    }
}

module.exports = apiErrorHandler;