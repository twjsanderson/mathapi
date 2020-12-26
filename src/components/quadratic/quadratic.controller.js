const MathOperations = require("../../util/math");

const math = new MathOperations; 

class Quadratic {

    // Quadradtic Function
    quadraticFunction = (req, res) => {
        const a = req.query.a;
        const b = req.query.b;
        const c = req.query.c;

        // input check, update tyep check
        if (
            Number(a) < -100000 || 
            Number(a) > 100000 || 
            Number(b) < -100000 || 
            Number(b) > 100000 || 
            Number(c) < -100000 || 
            Number(c) > 100000
        ) {
            res.send({
                operation: 'quadratic formula',
                error: 'The size of one or more queries is out of range'  
            });
        } else {
            const answer = math.quadraticFormula(Number(a), Number(b), Number(c));
            res.send({ 
                operation: 'quadratic formula',
                answer: answer 
            });
        }
    };
};

module.exports = Quadratic;