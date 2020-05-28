class MultiplicationOperations {

    simpleMultiplication = (x, y) => {
        return x * y;
    };

    multipleMultiplication = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc * curr
        });
    };
};

module.exports = MultiplicationOperations;