function errorHandler(err, req, res, next) {
    console.error(err.stack); // Registra el error
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV !== 'production' ? err.stack : null,
    });
  }
  
  module.exports = errorHandler;
  
