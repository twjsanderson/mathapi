class AdditionOperations {

    simpleAddition = (x, y) => {
        return x + y;
    };

    multipleAddition = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc + curr
        });
    };
};

module.exports = AdditionOperations;