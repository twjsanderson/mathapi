const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");
const ApiSuccess = require('../../../util/http/success/ApiSuccess');
const ApiError = require("../../../util/http/error/ApiError");

const { add, addMultiple } = new MathOperations; 
const { stringToNumArray } = new Helpers;
const { notFound } = ApiError;

class Addition {

    // Simple Addition
    simpleAddition = (req, res, next) => {
        const { success } = new ApiSuccess(res);
        const x = req.query.x;
        const y = req.query.y;
    
        if (Number(x) === 10) {
            notFound('simpleAddition')
            // res.send({
            //     operation: 'addition',
            //     error: 'The size of one or more queries is out of range'  
            // });
        } else if (Number(x) !== 10) {
            const answer = add(Number(x), Number(y));
            success(200, 'simpleAddition', answer);
        }
    };

    // Multiple Addition
    multipleAddition = (req, res) => {
        const { success } = new ApiSuccess(res);
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'multiple addition',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = stringToNumArray(x);
            const answer = addMultiple(numArray);
            success(200, 'multiple addition', answer)
        }
    };
};

module.exports = Addition;