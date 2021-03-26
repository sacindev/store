const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: String,
  categorie: {
    type: String,
    enum: ["GPU","SSD", "RAM", "HDD", "CPU"],
    required: true
  },
});

module.exports = mongoose.model("Product", ProductSchema);
