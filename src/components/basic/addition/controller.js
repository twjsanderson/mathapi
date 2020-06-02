const MathOperations = require("../../../util/math");

const math = new MathOperations; 

const stringToNumArray = (str) => str.split(",").map(Number); 

// Simple Addition
exports.simpleAddition = (req, res) => {
    let x = req.query.x;
    let y = req.query.y;

    // input check, update tyep check
    if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
        setTimeout(() => {
            res.send({
                operation: 'addition',
                error: 'One or more query size is out of range' 
            });
        }, 1000)
    } else {
        setTimeout(() => {
            const answer = math.add(Number(x), Number(y));
            res.send({ 
                operation: 'addition',
                answer: answer 
            });
        }, 1000)
    }
};

// Multiple Addition
exports.multipleAddition = (req, res) => {
    let x = req.query.x;

    // input check, array check, item size check
    if (!x) {
        setTimeout(() => {
            res.send({
                operation: 'multiple addition',
                error: 'One or more query size is out of range' 
            });
        }, 1000)
    } else {
        setTimeout(() => {
            const numArray = stringToNumArray(x);
            const answer = math.addMultiple(numArray);
            res.send({ 
                operation: 'multiple addition',
                answer: answer 
            });
        }, 1000)
    }
};
    