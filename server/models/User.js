const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String,
  user_name: String,
  first_name: String,
  last_name: String,
  born: {
    day: Number,
    mounth: Number,
    year: Number,
  },
  product_list: Object,
});

module.exports = mongoose.model("User", UserSchema);
