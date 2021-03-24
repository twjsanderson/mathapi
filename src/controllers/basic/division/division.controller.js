const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Divison {

    // Simple Division
    simpleDivision = (req, res) => {
        const x = req.query.x;
        const y = req.query.y;

        // input check, update tyep check
        if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
            res.send({
                operation: 'division',
                error: 'The size of one or more queries is out of range'  
            });
        } else {
            const answer = math.divide(Number(x), Number(y));
            res.send({ 
                operation: 'division',
                answer: answer 
            });
        }
    };

    // Multiple Division
    multipleDivision = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'multiple division',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.divideMultiple(numArray);
            res.send({ 
                operation: 'multiple division',
                answer: answer 
            });
        }
    };
};

module.exports = Divison;