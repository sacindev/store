const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: String,
});

module.exports = mongoose.model("Product", ProductSchema);
