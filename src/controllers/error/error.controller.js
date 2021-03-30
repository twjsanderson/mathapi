const ApiError = require('../../util/httpResponses/error/ApiError');
const Helpers = require('../../util/helpers');

const { isSafeNumber } = Helpers;
const { 
    badRequest,
    unauthorized,
    notFound, 
    methodNotAllowed, 
    unprocessableEntity, 
    tooManyRequests, 
    internalServerError
} = ApiError;

class ErrorController {
    constructor(res, resource) {
        this.res = res;
        this.resource = resource;
        this.numSize = 100000;
        this.baseSize = 100000;
        this.exponentSize = 25;
        this.arraySize = 10000;
        this.quadraticSize = 100000;
        this.meanSize = 10000;
        this.medianSize = 100000;
        this.modeSize = 100000;
        this.rangeSize = 100000;
        this.varianceSize = 100000;
    }

    notNumbers = (x, y) => {
        if (!isSafeNumber(x) || !isSafeNumber(y)) badRequest(this.resource);
    };

    incorrectNumberSize = (x, y) => {
        if (x > this.numSize || y > this.numSize) badRequest(this.resource);
        if (x < -this.numSize || y < -this.numSize) badRequest(this.resource);
    };

    notArray = (arr) => {
        if (!Array.isArray(arr)) badRequest(this.resource);
    };

    incorrectArraySize = (arr) => {
        if (arr.length > this.arraySize || arr.length < 1) badRequest(this.resource); 
    };

    arrayDoesNotIncludeNumbers = (arr) => {
        const includeSafeNumbers = arr.every(num => isSafeNumber(num));
        if (!includeSafeNumbers) badRequest(this.resource);
    };

    incorrectExponentBaseSizes = (base, exponent) => {
        if (base > this.baseSize || base < 1) badRequest(this.resource);
        if (exponent > this.exponentSize || exponent < 0) badRequest(this.resource);
    };

    incorrectSqrtBase = (base) => {
        if (base > this.baseSize || base < 0 || !isSafeNumber(base)) badRequest(this.resource);
    };

    incorrectQuadraticSize = (x) => {
        if (!isSafeNumber(x) || x > this.quadraticSize || x < 1) badRequest(this.resource);
    };

    incorrectMeanSize = (arr) => {
        if (arr.length > this.meanSize || arr.length < 1) badRequest(this.resource);
    };

    incorrectMedianSize = (arr) => {
        if (arr.length > this.medianSize || arr.length < 1) badRequest(this.resource);
    };

    incorrectModeSize = (arr) => {
        if (arr.length > this.modeSize || arr.length < 1) badRequest(this.resource);
    };

    incorrectRangeSize = (arr) => {
        if (arr.length > this.rangeSize || arr.length < 1) badRequest(this.resource);
    };

    incorrectVarianceSize = (arr) => {
        if (arr.length > this.varianceSize || arr.length < 1) badRequest(this.resource);
    };

    // Error Handlers

    stddErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectVarianceSize(arr);
        arr.forEach(num => this.squareRootErrorHandler(num));
        this.arrayDoesNotIncludeNumbers(arr);
    };

    varianceErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectVarianceSize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };

    rangeErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectRangeSize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };

    modeErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectModeSize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };

    medianErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectMedianSize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };

    meanErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectMeanSize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };

    quadraticErrorHandler = (arr) => {
        arr.forEach(num => this.incorrectQuadraticSize(num));
    };

    squareRootErrorHandler = (base) => {
        this.incorrectSqrtBase(base);
    };

    exponentErrorHandler = (base, exponent) => {
        this.notNumbers(base, exponent);
        this.incorrectExponentBaseSizes(base, exponent);
    };

    numbersErrorHandler = (x, y) => {
        this.notNumbers(x, y);
        this.incorrectNumberSize(x, y);
    };

    arrayErrorHandler = (arr) => {
        this.notArray(arr);
        this.incorrectArraySize(arr);
        this.arrayDoesNotIncludeNumbers(arr);
    };
};

module.exports = ErrorController;