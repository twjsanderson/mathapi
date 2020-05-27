class AdditionOperations {
    
    constructor() {
        this.simpleAddition = this.simpleAddition
    }
    simpleAddition = (x, y) => {
        return x + y;
    };

    multplieAddition = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc + curr
        });
    };
};

module.exports = AdditionOperations;