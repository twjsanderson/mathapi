const MathOperations = require('../../util/math');
const ApiSuccess = require('../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../error/error.controller');

const { quadraticFormula } = MathOperations; 

class Quadratic {

    /**
     * Quadradtic Function
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    quadraticFunction = (req, res, next) => {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        const c = Number(req.query.c);
        const { success } = new ApiSuccess(res);
        const { quadraticErrorHandler } = new ErrorController(res, 'quadraticFormula');
        
        quadraticErrorHandler([a, b, c]);
        const answer = quadraticFormula(a, b, c);
        success(200, 'quadraticFormula', answer);

    };
};

module.exports = Quadratic;