const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const client = require("./database"); //Database connection

//routes
const authRoutes = require("./routes/auth");

//port
const port = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the ROOT DIRECTORY!");
});

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});

// routes
app.use("/api", authRoutes);