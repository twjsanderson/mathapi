const ApiError = require('../error/ApiError');

class ErrorHandler {

    static error = (x) => {
        if (Number(x) < -100000000000 || Number(x) > 100000000000 || Number(y) < -100000000000 || Number(y) > 100000000000) {
            res.send({
                operation: 'addition',
                error: 'The size of one or more queries is out of range'  
            });
        }
    }
};

module.exports = ErrorHandler;
