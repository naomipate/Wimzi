const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("*", (req, res) => {
  res.status(404).send("Sorry, page not found!");
});
module.exports = app;
