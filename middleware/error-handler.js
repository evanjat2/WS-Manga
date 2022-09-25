const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: `Terjadi eror` });
};

export default errorHandlerMiddleware;
