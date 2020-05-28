const MultiplicationOperations = require("../multiplication/index");

const multiplication = new MultiplicationOperations;
const multiply = multiplication.simpleMultiplication;

class PowerOperations {

    powerOf = (x, y) => {
        return Math.pow(x, y);
    };

    powerOfPower = (x, y, z) => {
        const power = multiply(y, z); 
        return (y < 0 && z > 0) || (y > 0 && z < 0) ? 1 / (Math.pow(x, -power)) : Math.pow(x, power);
    };

};

module.exports = PowerOperations;