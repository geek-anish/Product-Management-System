const errormiddleware = (err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message,
  });
};

export default errormiddleware;

// status code
// success
// 2xxx family
// for all we use 200
// create update 201


// error 
// 4xxx family
// for all we use 400
// page not found 404

