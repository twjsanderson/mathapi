const ApiError = require('./ApiError');

const apiErrorHandler = (err, req, res, next) => {
  // in prod, don't use console.log or console.err because
  // it is not async
  console.error(err);

  if (err instanceof ApiError) {
    console.log(err)
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('Internal Server Error');
};

module.exports = apiErrorHandler;