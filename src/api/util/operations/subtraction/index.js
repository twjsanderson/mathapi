class SubtractionOperations {

    simpleSubtraction = (x, y) => {
        return y > x ? x - (-y) : x - y;
    };

    multipleSubtraction = (digits) => {
        return digits.reduce((acc, curr) => {
            return curr > acc ? acc - (-curr) : acc - curr;
        });
    };
};

module.exports = SubtractionOperations;