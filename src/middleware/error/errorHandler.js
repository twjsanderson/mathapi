const ApiError = require('../../util/httpResponses/error/ApiError');
const { internalServerError } = require('../../util/httpResponses/error/ApiError');

const errorHandler = (err, req, res, next) => {
  // in prod, don't use console.log or console.err because
  // it is not async
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.statusCode)
      .json({ 
        operation: err.name, 
        message: err.message 
      });
    return;
  }

  internalServerError('Server');

};

module.exports = errorHandler;