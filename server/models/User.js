const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bcrypt = require("bcrypt");

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  birthday: Date,
  email: String,
  user_name: String,
  password: String,
  product_list: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    enum: ["superAdmin", "superUser", "user", "admin"],
    default: "user",
  },
});
UserSchema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

UserSchema.methods.decryptPassword = function (password, verifyPassword) {
  return bcrypt.compare(password, this.password, (err, isChecked) => {
    if (err) return verifyPassword(err)
    verifyPassword(null, isChecked);
  });
};
module.exports = mongoose.model("User", UserSchema);
