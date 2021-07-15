import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
  first_name: string,
  last_name: string,
  birthday: string,
  email: string,
  user_name: string
  password: string,
  product_list: string[],
  role: Object
}

const UserSchema = new mongoose.Schema<IUser>({
  first_name: String,
  last_name: String,
  birthday: Date,
  email: {
    type: String,
    unique:true, 
    require:true
  },
  user_name: {
    type: String,
    unique:true, 
    require:true
  },
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


UserSchema.method('decryptPassword', function(password: string) {
  return bcrypt.compare(password, this.password);
});

UserSchema.method('encryptPassword', async function (password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
});

export const User = mongoose.model("User", UserSchema);
 