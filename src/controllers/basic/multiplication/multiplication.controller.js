const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { multiply, multiplyMultiple } = MathOperations; 
const { stringToNumArray } = Helpers;

class Multiplication {
    
    /**
     * Simple Multiplication
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleMultiplication = (req, res) => {
        const x = Number(req.query.x);
        const y = Number(req.query.y);
        const { success } = new ApiSuccess(res);
        const { numbersErrorHandler } = new ErrorController(res, 'simpleMultiplication');
        
        numbersErrorHandler(x, y);
        const answer = multiply(x, y);
        success(200, 'simpleMultiplication', answer);
    };

    /**
     * Multiple Multiplication
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    multipleMultiplication = (req, res) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { arrayErrorHandler, notArray } = new ErrorController(res, 'multipleMultiplication');
        
        const numArray = (typeof x === undefined || typeof x === null) ? stringToNumArray(x) : notArray(x);
        arrayErrorHandler(numArray);
        const answer = multiplyMultiple(numArray);
        success(200, 'multipleMultiplication', answer);
    };
};
    
module.exports = Multiplication;