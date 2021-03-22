const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Median {
    // Median
    simpleMedian = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'median',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.median(numArray);
            res.send({ 
                operation: 'median',
                answer: answer 
            });
        }
    };
};

module.exports = Median;
    