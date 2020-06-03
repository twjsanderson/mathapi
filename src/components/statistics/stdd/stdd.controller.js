const MathOperations = require("../../../util/math");
const helpers = require("../../../util/helpers");

const math = new MathOperations; 
const stringToNumArray = helpers.stringToNumArray;

// Standard Deviation
exports.stdd = (req, res) => {
    const x = req.query.x;

    // input check, array check, item size check
    if (!x) {
        res.send({
            operation: 'Standard Deviation',
            error: 'One or more query size is out of range' 
        });
    } else {
        const numArray = stringToNumArray(x);
        const answer = math.standardDeviation(numArray);
        res.send({ 
            operation: 'Standard Deviation',
            answer: answer 
        });
    }
};
    