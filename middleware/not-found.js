const notFoundMiddleware = (req, res) =>
  res.status(404).send("Route tidak ada");

export default notFoundMiddleware;
