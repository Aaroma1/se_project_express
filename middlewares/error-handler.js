const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    return res
      .status(409)
      .send({ message: "A user with this email already exists." });
  }

  if (err.name === "ValidationError") {
    return res
      .status(400)
      .send({ message: "Invalid data passed to the server." });
  }

  if (err.name === "CastError") {
    return res.status(400).send({ message: "Invalid ID format." });
  }

  if (err.name === "DocumentNotFoundError") {
    return res.status(404).send({ message: "Resource not found." });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).send({ message: "Invalid token." });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).send({ message: "Token expired." });
  }

  if (err.statusCode) {
    return res
      .status(err.statusCode)
      .send({ message: err.message || "An error occurred." });
  }

  return res
    .status(500)
    .send({ message: "An error has occurred on the server." });
};

module.exports = errorHandler;
