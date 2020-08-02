const express = require("express");
const mongoose = require("./database");
const morgan = require("morgan");
var app = express();

app.use(morgan("dev"));

app.use(express.static("public"));
// Routes
app.use("/api/product", require("./routes/product.routes"));

app.use("/api/user", require("./routes/user.routes"));

try {
  app.listen(3000, function () {
    console.log("Listening on port 3000!");
  });
} catch (error) {
  console.log("Error on port 3000!", error);
}
