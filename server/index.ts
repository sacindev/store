import express, { Request, Response } from "express";
import { run } from "./database";
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

run();

var app = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use(express.static("public"));
// Routes
app.use("/api/product", require("./routes/product.routes"));

app.use("/api/user", require("./routes/user.routes"));

app.use("/api/categorie", require("./routes/categorie.routes"));

app.use("*", function (req: Request, res: any) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

try {
  app.listen(3000, function () {
  });
} catch (error) {

}
