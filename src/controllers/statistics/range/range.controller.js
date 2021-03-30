const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { range } = MathOperations; 
const { stringToNumArray } = Helpers;

class Range {

    /**
     * Simple Range
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleRange = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { rangeErrorHandler, notArray } = new ErrorController(res, 'simpleRange');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        rangeErrorHandler(numArray);
        const answer = range(numArray);
        success(200, 'simpleRange', answer);
    };
};

module.exports = Range;
    