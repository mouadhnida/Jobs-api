const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong try again later'
  }
  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors).map((item) => item.message).join(',');
    customError.statusCode = 400;
  }
  if (err.name === 'CastError') {
    customError.message = `No job with id : ${err.value}`;
    customError.statusCode = 404;
  }

  if (err.code === 11000) {
    customError.message = `Duplicated value entrered for ${Object.keys(err.keyPattern)} field, please choose another value.`
    customError.statusCode = 400
  }
  return res.status(customError.statusCode).json({msg: customError.message})
}

module.exports = errorHandlerMiddleware;