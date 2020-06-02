const MathOperations = require("../../../util/math");

const math = new MathOperations; 

// Simple SquareRoot
exports.simpleSquareRoot = (req, res) => {
    const base = req.query.base;

    // input check, update tyep check
    if (Number(base) < -100000000000 || Number(base) > 100000000000) {
        res.send({
            operation: 'square root',
            error: 'The size of one or more queries is out of range'  
        });
    } else {
        const answer = math.squareRoot(Number(base));
        res.send({ 
            operation: 'square root',
            answer: answer 
        });
    }
};

    