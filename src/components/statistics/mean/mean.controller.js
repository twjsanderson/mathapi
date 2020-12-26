const MathOperations = require("../../../util/math");
const Helpers = require("../../../util/helpers");

const math = new MathOperations; 
const helpers = new Helpers;

class Mean {
    
    // Mean
    simpleMean = (req, res) => {
        const x = req.query.x;

        // input check, array check, item size check
        if (!x) {
            res.send({
                operation: 'mean',
                error: 'One or more query size is out of range' 
            });
        } else {
            const numArray = helpers.stringToNumArray(x);
            const answer = math.mean(numArray);
            res.send({ 
                operation: 'mean',
                answer: answer 
            });
        }
    };
};

module.exports = Mean;
    