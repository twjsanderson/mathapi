const MathOperations = require('../../../util/math');
const ApiSuccess = require('../../../util/httpResponses/success/ApiSuccess');
const ErrorController = require('../../error/error.controller');

const { squareRoot } = MathOperations;  

class SquareRoot {
    
    /**
     * Simple Square Root
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    simpleSquareRoot = (req, res) => {
        const base = Number(req.query.base);
        const { success } = new ApiSuccess(res);
        const { squareRootErrorHandler } = new ErrorController(res, 'simpleSquareRoot');
        
        squareRootErrorHandler(base);
        const answer = squareRoot(base);
        success(200, 'simpleSquareRoot', answer);
    };
};

module.exports = SquareRoot;