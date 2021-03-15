class ApiError extends Error {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }

  error = (code, msg) => new ApiError(code, msg);

};

module.exports = ApiError;