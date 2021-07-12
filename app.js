const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Middlewares = app.use

//Parse posts
app.use(bodyParser.json());

//Allows access to api across domains
app.use(cors());

//Import Routes
const postsRoute = require("./Routes/posts");
app.use("/posts", postsRoute);

//Home Route
app.get("/", (req, res) => {
  res.send("Home route");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => console.log("Connected to DB")
);

//Listen to server
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
