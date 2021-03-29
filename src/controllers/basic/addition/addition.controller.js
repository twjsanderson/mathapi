const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { add, addMultiple } = MathOperations; 
const { stringToNumArray } = Helpers;

class Addition {

    /**
     * Simple Addition
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleAddition = (req, res, next) => {
        const x = Number(req.query.x);
        const y = Number(req.query.y);
        const { success } = new ApiSuccess(res);
        const { numbersErrorHandler } = new ErrorController(res, 'simpleAddition');
        
        numbersErrorHandler(x, y);
        const answer = add(x, y);
        success(200, 'simpleAddition', answer);
    };

    /**
     * Multiple Addition
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    multipleAddition = (req, res, next) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { arrayErrorHandler, notArray } = new ErrorController(res, 'multipleAddition');
        
        const numArray = (typeof x === undefined || typeof x === null) ? notArray(x) : stringToNumArray(x);
        arrayErrorHandler(numArray);
        const answer = addMultiple(numArray);
        success(200, 'multipleAddition', answer);
    };
};

module.exports = Addition;