const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { standardDeviation } = MathOperations; 
const { stringToNumArray } = Helpers;

class StandardDeviation {

    /**
     * Standard Deviation
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    stdd = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { stddErrorHandler, notArray } = new ErrorController(res, 'standardDeviation');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        stddErrorHandler(numArray);
        const answer = standardDeviation(numArray);
        success(200, 'standardDeviation', answer);
    };
};

module.exports = StandardDeviation;
    