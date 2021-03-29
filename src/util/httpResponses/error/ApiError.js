class ApiError extends Error {
  constructor(statusCode, name, message) {
    super(statusCode, name, message)
      this.statusCode = statusCode;
      this.name = name;
      this.message = message;
      Error.captureStackTrace(this);
  }

  static badRequest = (resource) => {
    throw new ApiError(400, resource,'Invalid or malformed request.')
  };

  static unauthorized = (resource) => {
    throw new ApiError(401, resource, 'Unauthorized, please sign in to use resource')
  };

  static notFound = (resource) => {
    throw new ApiError(404, resource, 'Resource not found.')
  };

  static methodNotAllowed = (resource) => {
    throw new ApiError(405, resource, 'Method not allowed for this resource.')
  };

  static unprocessableEntity = (resource) => {
    throw new ApiError(422, resource, 'The request was well-formed but unprocessable due to semantic errors')
  };

  // add how time limit here 
  static tooManyRequests = (resource) => {
    throw new ApiError(429, resource, 'Too many requests made')
  };

  static internalServerError = (resource) => {
    throw new ApiError(500, resource, 'Internal Server Error')
  };

};

module.exports = ApiError;