const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Multiplication {
    
    // Simple Multiplication
    simpleMultiplication = (req, res) => {
        const x = req.query.x;
        const y = req.query.y;

        // input check, update tyep check
        if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
            res.send({
                operation: 'multiplication',
                error: 'The size of one or more queries is out of range'  
            });
        } else {
            const answer = math.multiply(Number(x), Number(y));
            res.send({ 
                operation: 'multiplication',
                answer: answer 
            });
        }
    };

    // Multiple Multiplication
    multipleMultiplication = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'multiple multiplication',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.multiplyMultiple(numArray);
            res.send({ 
                operation: 'multiple multiplication',
                answer: answer 
            });
        }
    };
};
    
module.exports = Multiplication;