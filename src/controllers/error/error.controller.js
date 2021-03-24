const ApiError = require('../../util/httpResponses/error/ApiError');

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
    }

    static invalidQuerySize = (x, y) => {
        if (Array.isArray(x) || x.length > 100 || x.length < 1) badRequest(this.resource);
        // for x and y
    }

    static noQueryFound = () => {

    }


};

module.exports = ErrorController;