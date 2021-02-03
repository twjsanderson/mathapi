const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Addition {

    // Simple Addition
    simpleAddition = (req, res) => {
        const x = req.query.x;
        const y = req.query.y;
        
        // input check, update tyep check
        if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
            res.send({
                operation: 'addition',
                error: 'The size of one or more queries is out of range'  
            });
        } else {
            const answer = math.add(Number(x), Number(y));
            res.status(200).send({ 
                operation: 'addition',
                answer: answer 
            });
        }
    };

    // Multiple Addition
    multipleAddition = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'multiple addition',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.addMultiple(numArray);
            res.send({ 
                operation: 'multiple addition',
                answer: answer 
            });
        }
    };
};

module.exports = Addition;