const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { mean } = MathOperations; 
const { stringToNumArray } = Helpers;

class Mean {
    
    /**
     * Simple Mean
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleMean = (req, res) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { meanErrorHandler, notArray } = new ErrorController(res, 'mean');

        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        meanErrorHandler(numArray);
        const answer = mean(numArray);
        success(200, 'mean', answer);
    };
};

module.exports = Mean;
    