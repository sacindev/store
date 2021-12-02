import mongoose,{ObjectId} from 'mongoose'
import bcrypt from 'bcrypt'

 interface UserType {
  _id: ObjectId,
  first_name: string,
  last_name: string,
  birthday: string,
  email: string,
  user_name: string
  password: string,
  product_list: string[],
  role: Object, 
  checkPassword:Function,
  encryptPassword: Function
}

const UserSchema = new mongoose.Schema<UserType>({
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


UserSchema.method('checkPassword', async function(password: string) {
  let result = await bcrypt.compare(password, this.password);
  return result;
});

UserSchema.method('encryptPassword', async function (password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
});

const User = mongoose.model("User", UserSchema, 'users');


export  {User, UserType, UserSchema}