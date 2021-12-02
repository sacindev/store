require("dotenv").config();
import jwt from "jsonwebtoken";

 function generateToken(id: any, expiresIn: string) {
  return jwt.sign({id: id}, process.env.TOKEN_SECRET as jwt.Secret, {expiresIn : expiresIn});
}

export default generateToken;
