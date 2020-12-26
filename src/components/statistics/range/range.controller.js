const MathOperations = require("../../../util/math");
const helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Range {

    // Range
    simpleRange = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'range',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.range(numArray);
            res.send({ 
                operation: 'range',
                answer: answer 
            });
        }
    };
};

module.exports = Range;
    