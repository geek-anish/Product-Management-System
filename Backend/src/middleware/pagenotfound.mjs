const pagenotfoundmiddleware=(req, res, next) => {
  res.status(404).json({
    success: false,
    message: "page not found",
  });
};

export default pagenotfoundmiddleware;