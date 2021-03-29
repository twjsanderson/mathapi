const MathOperations = require("../../../util/math");
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { exponent } = MathOperations; 

class Exponent {
    
     /**
     * Simple Exponent
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleExponent = (req, res) => {
        const base = Number(req.query.base);
        const exp = Number(req.query.exponent);
        const { success } = new ApiSuccess(res);
        const { exponentErrorHandler } = new ErrorController(res, 'simpleExponent');
         
        exponentErrorHandler(base, exp);
        const answer = exponent(base, exp);
        success(200, 'simpleExponent', answer);
    };
};

module.exports = Exponent;