const apiError = require('../error/ApiError')

const validateRequest = (req, res, next) => {

    const urlParam = new URLSearchParams(req.query);

    if (!urlParam.has('search')) {
        next(apiError.badRequest('search param is required.'));
    } else if (urlParam.get('search') === undefined || urlParam.get('search') === '') {
        next(apiError.badRequest('search value can not be empty.'));
    } else {
        next();
    }
}

module.exports = validateRequest