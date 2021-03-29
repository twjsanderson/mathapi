class MathOperations {

    static add = (x, y) => x + y;

    static addMultiple = (digits) => digits.reduce((acc, curr) => acc + curr);

    static subtract = (x, y) => x - y;

    static subtractMultiple = (digits) => digits.reduce((acc, curr) => acc - curr);

    static multiply = (x, y) => x * y;

    static multiplyMultiple = (digits) => digits.reduce((acc, curr) => acc * curr);

    static divide = (numerator, denominator) => numerator / denominator;

    static divideMultiple = (digits) => digits.reduce((acc, curr) => acc / curr);

    static exponent = (base, exponent) => exponent < 0 ? 1 / Math.pow(base, -exponent) : Math.pow(base, exponent);

    static squareRoot = (base) => Math.sqrt(base);

    static mean = (digits) => {
        const digitsSum = this.addMultiple(digits);
        return digitsSum / digits.length;
    };

    static median = (digits) => {
        const sortedDigits = digits.sort((a, b) => a - b);
        const len = sortedDigits.length;
        const medianIndex = Math.floor(len/ 2);
        
        if (len / 2 % 2 === 0) (sortedDigits[medianIndex] + sortedDigits[medianIndex - 1]) / 2;

        return sortedDigits[medianIndex];
    };

    static mode = (digits) => {
        let hashMap = {},
            modes = [];
        
        for (let digit of digits) {
            if (!hashMap[digit]) {
                hashMap[digit] = 1;
            } else {
                hashMap[digit]++;
            };
        };
        // console.log(hashMap)
        const maxNumOfOccurences = Math.max(...Object.values(hashMap));
        
        for (let key in hashMap) {
            const num = Number(hasMap[key]);
            if (num === maxNumOfOccurences) {
                modes.push(Number(key));
            };
        };
        console.log(modes)
        return modes;    
    };

    static range = (digits) => Math.max(...digits) - Math.min(...digits);

    static variance = (digits) => {
        const digitsMean = this.mean(digits);
        const differencesSquared = digits.map((digit) => this.exponent(digit - digitsMean, 2));
        const totalDifferencesSquared = this.addMultiple(differencesSquared);
        const variance = totalDifferencesSquared / differencesSquared.length;
        
        return variance;
    };

    static standardDeviation = (digits) => {
        const variance = this.variance(digits);
        const stdd = this.squareRoot(variance);

        return Math.floor(stdd);
    };

    // x = ax^2 + bx + c
    // no imaginary numbers
    static quadraticFormula = (a, b, c) => {
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