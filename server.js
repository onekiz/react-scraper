const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("./client/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database connection
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/eventManager",
  {
    useMongoClient: true
  }
)
.catch(err => {
  console.log("Database is not running");
  console.log(err);
});


// Add routes, both API and view


app.listen(PORT, () => {
  console.log(
    `🌎  ==> API Server now listening on PORT http://localhost:${PORT}!`
  );
});
