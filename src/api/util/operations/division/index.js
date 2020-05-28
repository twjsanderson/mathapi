class DivisionOperations {

    simpleDivision = (x, y) => {
        return x / y;
    };

    multipleDivision = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc / curr
        });
    };
};

module.exports = DivisionOperations;