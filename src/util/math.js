class MathOperations {

    add = (x, y) => x + y;

    addMultiple = (digits) => digits.reduce((acc, curr) => acc + curr);

    subtract = (x, y) => x - y;

    subtractMultiple = (digits) => digits.reduce((acc, curr) => acc - curr);

    multiply = (x, y) => x * y;

    multiplyMultiple = (digits) => digits.reduce((acc, curr) => acc * curr);

    divide = (numerator, denominator) => numerator / denominator;

    divideMultiple = (digits) => digits.reduce((acc, curr) => acc / curr);

    exponent = (base, exponent) => exponent < 0 ? 1 / Math.pow(base, -exponent) : Math.pow(base, exponent);

    squareRoot = (base) => Math.sqrt(base);

    mean = (digits) => {
        const digitsSum = this.addMultiple(digits);
        return digitsSum / digits.length;
    };

    median = (digits) => {
        const sortedDigits = digits.sort((a, b) => a - b);
        const len = sortedDigits.length;
        const medianIndex = Math.floor(len/ 2);
        
        if (len / 2 % 2 === 0) (sortedDigits[medianIndex] + sortedDigits[medianIndex - 1]) / 2;

        return sortedDigits[medianIndex];
    };

    mode = (digits) => {
        const hashMap = {};
        const modes = [];

        for (let digit of digits) {
            if (!hashMap[digit]) {
                hashMap[digit] = 0;
            } else {
                hashMap[digit]++;
            };
        };

        const maxNumOfOccurences = Math.max(...Object.values(hashMap));

        for (let key in hashMap) {
            const num = Number(hasMap[key]);
            if (num === maxNumOfOccurences) {
                modes.push(Number(key));
            };
        };

        return modes;    
    };

    range = (digits) => Math.max(...digits) - Math.min(...digits);

    variance = (digits) => {
        const digitsMean = this.mean(digits);
        const differencesSquared = digits.map((digit) => this.exponent(digit - digitsMean, 2));
        const totalDifferencesSquared = this.addMultiple(differencesSquared);
        const variance = totalDifferencesSquared / differencesSquared.length;
        
        return variance;
    };

    standardDeviation = (digits) => {
        const variance = this.variance(digits);
        const stdd = this.squareRoot(variance);

        return Math.floor(stdd);
    };

    // x = ax^2 + bx + c
    // no imaginary numbers
    quadraticFormula = (a, b, c) => {
        const solutions = [];

        const exp = this.exponent(b, 2);
        const d = this.squareRoot(exp - this.multiply(4, a, c));

        const e1 = -b + d;
        const e2 = -b - d;

        const positiveSolution = e1 / this.multiply(2, a);
        const negativeSolution = e2 / this.multiply(2, a);

        solutions.push(positiveSolution);
        solutions.push(negativeSolution);

        return solutions;
    }; 

};

module.exports = MathOperations;