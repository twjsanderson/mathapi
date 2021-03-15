const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");
const ApiSuccess = require('../../../util/success/ApiSuccess');

const { add, addMultiple } = new MathOperations; 
const { stringToNumArray } = new Helpers;

class Addition {

    // Simple Addition
    simpleAddition = (req, res) => {
        const { success } = new ApiSuccess(res);
        const x = req.query.x;
        const y = req.query.y;
        
        
        if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
            res.send({
                operation: 'addition',
                error: 'The size of one or more queries is out of range'  
            });
        } else {
            const answer = add(Number(x), Number(y));
            success(200, 'addition', answer);
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