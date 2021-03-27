const express = require("express");
const mongoose = require("./database");
const morgan = require("morgan");
const path = require("path");
let bodyParser = require("body-parser");
const dotenv = require("dotenv");

var app = express();

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(express.static("public"));
// Routes
app.use("/api/product", require("./routes/product.routes"));

app.use("/api/user", require("./routes/user.routes"));

app.use("/api/categorie", require("./routes/categorie.routes"));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

try {
  app.listen(3000, function () {
    console.log("Listening on port 3000!");
  });
} catch (error) {
  console.log("Error on port 3000!", error);
}
