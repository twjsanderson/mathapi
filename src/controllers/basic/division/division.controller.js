const MathOperations = require('../../../util/math');
const Helpers = require('../../../util/helpers');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { divide, divideMultiple } = MathOperations; 
const { stringToNumArray } = Helpers;

class Divison {

    /**
     * Simple Division
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleDivision = (req, res) => {
        const x = Number(req.query.x);
        const y = Number(req.query.y);
        const { success } = new ApiSuccess(res);
        const { numbersErrorHandler } = new ErrorController(res, 'simpleDivision');

        numbersErrorHandler(x, y);
        const answer = divide(x, y);
        success(200, 'simpleDivision', answer);
    };

    /**
     * Multiple Division
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    multipleDivision = (req, res) => {
        const x = req.query.x;
        const { success } = new ApiSuccess(res);
        const { arrayErrorHandler, notArray } = new ErrorController(res, 'multipleDivision');
        
        const numArray = (typeof x === undefined || typeof x === null) ? stringToNumArray(x) : notArray(x);
        arrayErrorHandler(numArray);
        const answer = divideMultiple(numArray);
        success(200, 'multipleDivision', answer)
    };
};

module.exports = Divison;