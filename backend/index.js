const express = require("express");
const app = express();
require("dotenv").config();

//port
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`This app is listening at port ${port}`);
});
