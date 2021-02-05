const apiError = require('../error/ApiError')

const interceptRequest = (req, res, next) => {

    const inputAttacks = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

    if (req.query['search'].match(inputAttacks)) {
        console.log(`A possible injection has been with search value ${req.query['search']}`)
        next(apiError.serverError('Request Denied.'));
    } else {
        next();
    }
}

module.exports = interceptRequest