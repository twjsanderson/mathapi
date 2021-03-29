class Helpers {

    static stringToNumArray = str => str.split(",").map(Number);

    static isSafeNumber = num => typeof num === 'number' && isFinite(num) && Math.floor(num) === num ? true : false;

};

module.exports = Helpers;