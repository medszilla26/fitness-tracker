require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

let uri = "mongodb://localhost/workoutDB";
if (process.env.NODE_ENV === "production") {
  uri = process.env.MONGODB_URI;
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: true,
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}!`);
});
