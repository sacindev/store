const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Categorie", CategorieSchema);
