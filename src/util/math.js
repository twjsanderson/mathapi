class MathOperations {

    add = (x, y) => {
        return x + y;
    };

    addMultiple = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc + curr;
        });
    };

    subtract = (x, y) => {
        return x - y;
    };

    subtractMultiple = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc - curr;
        });
    };

    multiply = (x, y) => {
        return x * y;
    };

    multiplyMultiple = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc * curr;
        });
    };

    divide = (numerator, denominator) => {
        return numerator / denominator;
    };

    divideMultiple = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc / curr;
        });
    };

    exponent = (base, exponent) => {
        return exponent < 0 ? 1 / Math.pow(base, -exponent) : Math.pow(base, exponent);
    };

    squareRoot = (base) => {
        return Math.sqrt(base);
    };

    mean = (digits) => {
        const digitsSum = this.addMultiple(digits);
        return digitsSum / digits.length;
    };

    median = (digits) => {

        const sortedDigits = digits.sort((a, b) => {
            return a - b
        });

        const len = sortedDigits.length;
        const medianIndex = Math.floor(len/ 2);
        
        if (len / 2 % 2 === 0) {
            return (sortedDigits[medianIndex] + sortedDigits[medianIndex - 1]) / 2;
        }

        return sortedDigits[medianIndex];
    };

    mode = (digits) => {
        const hashMap = new Set;
        const modes = [];

        for (let digit of digits) {
            hashMap[digit] = 0;
        };

        for (let digit of digits) {
            hashMap[digit] += 1
        };

        const maxNumOfOccurences = Math.max(...Object.values(hashMap));

        for (let key in hashMap) {
            if (Number(hashMap[key]) === maxNumOfOccurences) {
                modes.push(Number(key));
            };
        };

        return modes;    
    };

    range = (digits) => {
        return Math.max(...digits) - Math.min(...digits);
    };

    variance = (digits) => {
        const digitsMean = this.mean(digits);
        const differencesSquared = digits.map((digit) => {
            return this.exponent(digit - digitsMean, 2);
        });
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