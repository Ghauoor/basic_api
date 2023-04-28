const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectToDB = require("./config/db");
connectToDB();

const userRoute = require("./routes/userRoutes");

app.use("/", userRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcom to our custom server</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Welcom to Ghayoor Youtube Channel</h1>");
});

app.get("/instagram", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to My Instagram",
  });
});

module.exports = app;
