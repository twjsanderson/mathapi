const MathOperations = require("../../../util/math");
const helpers = require("../../../util/helpers");

const math = new MathOperations; 
const stringToNumArray = helpers.stringToNumArray;


// Simple Subtraction
exports.simpleSubtraction = (req, res) => {
    const x = req.query.x;
    const y = req.query.y;

    // input check, update tyep check
    if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
        res.send({
            operation: 'subtraction',
            error: 'The size of one or more queries is out of range' 
        });
    } else {
        const answer = math.subtract(Number(x), Number(y));
        res.send({ 
            operation: 'subtraction',
            answer: answer 
        });
    }
};


// Multiple Subtraction
exports.multipleSubtraction = (req, res) => {
    const x = req.query.x;

    // input check, array check, item size check
    if (!x) {
        res.send({
            operation: 'multiple subtraction',
            error: 'The size of one or more queries is out of range' 
        });
    } else {
        const numArray = stringToNumArray(x);
        const answer = math.subtractMultiple(numArray);
        res.send({ 
            operation: 'multiple subtraction',
            answer: answer 
        });
    }
};