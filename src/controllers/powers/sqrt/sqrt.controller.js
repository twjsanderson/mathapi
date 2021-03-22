const MathOperations = require("../../../util/math");

const math = new MathOperations; 

class SquareRoot {
    
    // Simple SquareRoot
    simpleSquareRoot = (req, res) => {
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
};

module.exports = SquareRoot;