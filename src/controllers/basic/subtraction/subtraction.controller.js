const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { subtract, subtractMultiple } = MathOperations; 
const { stringToNumArray } = Helpers;

class Subtraction {

   /**
     * Simple Subtraction
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleSubtraction = (req, res, next) => {
        const x = Number(req.query.x);
        const y = Number(req.query.y);
        const { success } = new ApiSuccess(res);
        const { numbersErrorHandler } = new ErrorController(res, 'simpleSubtraction');
        
        numbersErrorHandler(x, y);
        const answer = subtract(x, y);
        success(200, 'simpleSubtraction', answer);
    };

    /**
     * Multiple Subtraction
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
     multipleSubtraction = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { arrayErrorHandler, notArray } = new ErrorController(res, 'multipleSubtraction');
        
        const numArray = (typeof x === undefined || typeof x === null) ? stringToNumArray(x) : notArray(x);
        arrayErrorHandler(numArray);
        const answer = subtractMultiple(numArray);
        success(200, 'multipleSubtraction', answer);
    };
};

module.exports = Subtraction;