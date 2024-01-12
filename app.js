const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const blogsRouter = require("./routes/BlogsRoutes");
const connectDB = require("./config/db");

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use("/posts", blogsRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

connectDB();

module.exports = app;
