const MathOperations = require("../../../util/math");
const helpers = require("../../../util/helpers");

const math = new MathOperations; 
const stringToNumArray = helpers.stringToNumArray;

// Variance
exports.variance = (req, res) => {
    const x = req.query.x;

    // input check, array check, item size check
    if (!x) {
        res.send({
            operation: 'variance',
            error: 'One or more query size is out of range' 
        });
    } else {
        const numArray = stringToNumArray(x);
        const answer = math.variance(numArray);
        res.send({ 
            operation: 'variance',
            answer: answer 
        });
    }
};