const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { errors } = require("celebrate");
const mainRouter = require("./routes/index");
const auth = require("./middlewares/auth");
const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const app = express();
const { PORT = 3001 } = process.env;

const { login, createUser } = require("./controllers/users");

app.use(express.json());
app.use(cors());

app.post("/signin", login);
app.post("/signup", createUser);

app.get("/items", require("./controllers/clothingItems").getItems);

app.use(auth);

app.use(requestLogger);

app.use("/", mainRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
