const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { mode } = MathOperations; 
const { stringToNumArray } = Helpers;

class Mode {
    /**
     * Simple Mode
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
     simpleMode = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { modeErrorHandler } = new ErrorController(res, 'simpleMode');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        modeErrorHandler(numArray);
        console.log(Array.isArray(numArray))
        const answer = mode(numArray);
        success(200, 'simpleMode', answer);
    };
};

module.exports = Mode;
    