const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class StandardDeviation {
    // Standard Deviation
    stddCalc = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'Standard Deviation',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.standardDeviation(numArray);
            res.send({ 
                operation: 'Standard Deviation',
                answer: answer 
            });
        }
    };
};

module.exports = StandardDeviation;
    