class MathOperations {

    add = (x, y) => {
        return x + y;
    };

    addArray = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc + curr;
        });
    };

    subtract = (x, y) => {
        return x - y;
    };

    subtractArray = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc - curr;
        });
    };

    multiply = (x, y) => {
        return x * y;
    };

    multiplyArray = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc * curr;
        });
    };

    divide = (numerator, denominator) => {
        return numerator / denominator;
    };

    divideArray = (digits) => {
        return digits.reduce((acc, curr) => {
            return acc / curr;
        });
    };

    exponent = (base, exponent) => {
        return exponent < 0 ? 1 / Math.pow(base, -exponent) : Math.pow(base, exponent);
    };

    exponentOfExponent = (base, innerExponent, outerExponent) => {
        const power = multiply(innerExponent, outerExponent); 
        return (innerExponent < 0 && outerExponent > 0) || (innerExponent > 0 && outerExponent < 0) ? 1 / exponent(base, -power) : exponent(x, power);
    };

    squareRoot = (base) => {
        return Math.sqrt(base);
    };

    // 3 sqrt 8 ^ 2 === rootIndex sqrt base ^ power
    // rounded to nearest whole number
    fractionalExponent = (rootIndex, base, power) => {
        const newPower = power / rootIndex;
        return Math.round((this.exponent(base, newPower)));
    };

    mean = (digits) => {
        const digitsSum = this.addArray(digits);
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
        const totalDifferencesSquared = this.addArray(differencesSquared);
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

        const solution1 = e1 / this.multiply(2, a);
        const solution2 = e2 / this.multiply(2, a);

        solutions.push(solution1);
        solutions.push(solution2);

        return solutions;
    }; 

};

module.exports = MathOperations;