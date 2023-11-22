const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  console.log("Request received!");
  res.status(200).send("Hello World")

})
module.exports = app;