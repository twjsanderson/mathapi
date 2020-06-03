const MathOperations = require("../../../util/math");
const helpers = require("../../../util/helpers");

const math = new MathOperations; 
const stringToNumArray = helpers.stringToNumArray;

// Mode
exports.mode = (req, res) => {
    const x = req.query.x;

    // input check, array check, item size check
    if (!x) {
        res.send({
            operation: 'mode',
            error: 'One or more query size is out of range' 
        });
    } else {
        const numArray = stringToNumArray(x);
        const answer = math.mode(numArray);
        res.send({ 
            operation: 'mode',
            answer: answer 
        });
    }
};
    