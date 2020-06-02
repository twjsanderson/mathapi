const MathOperations = require("../../../util/math");

const math = new MathOperations; 

// Simple Exponent
exports.exponent = (req, res) => {
    const base = req.query.base;
    const exponent = req.query.exponent;

    // input check, update tyep check
    if (Number(base) < -100000000000 || Number(base) > 100000000000 || Number(exponent) < -100000000000 || Number(exponent) > 100000000000) {
        res.send({
            operation: 'exponent',
            error: 'The size of one or more queries is out of range'  
        });
    } else {
        const answer = math.exponent(Number(base), Number(exponent));
        res.send({ 
            operation: 'exponent',
            answer: answer 
        });
    }
};
