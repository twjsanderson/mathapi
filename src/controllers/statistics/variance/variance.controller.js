const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { variance } = MathOperations; 
const { stringToNumArray } = Helpers;

class Variance {
     /**
     * Simple Variance
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleVariance = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { varianceErrorHandler, notArray } = new ErrorController(res, 'simpleVariance');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        varianceErrorHandler(numArray);
        const answer = variance(numArray);
        success(200, 'simpleVariance', answer);
    };
};

module.exports = Variance;