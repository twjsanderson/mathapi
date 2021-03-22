class ApiError extends Error {
  constructor(statusCode, name, message) {
    super(statusCode, name, message)
      this.statusCode = statusCode;
      this.name = name;
      this.message = message;
      Error.captureStackTrace(this);
  }

  static notFound = (resource) => {
    throw new ApiError(400, resource,'Not Found')
  };

};

module.exports = ApiError;