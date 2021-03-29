const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { median } = MathOperations; 
const { stringToNumArray } = Helpers;

class Median {
    /**
     * Simple Median
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
     simpleMedian = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { medianErrorHandler, notArray } = new ErrorController(res, 'simpleMedian');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        medianErrorHandler(numArray);
        const answer = median(numArray);
        success(200, 'simpleMedian', answer);
    };
};

module.exports = Median;
    