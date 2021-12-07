import { Response, Request } from "express";
import { User, UserType } from "../models/User";
import generateToken from "./generateToken";

function logNewUser(req: Request, res: Response) {

  const { first_name, last_name, birthday, email, user_name, password } =
    req.body;

  User.findOne({ email: email }, async (err: any, user: any) => {
    
    if (err) {
      res.status(500).json({ error: true, msg: "ERROR SERVER", token: null });
      return;
    }

    if (user) {
      res.json({ error: true, msg: "USER ALREADY EXIST", token: null });
      return;
    }

    const newUser = new User({
      first_name,
      last_name,
      birthday,
      email,
      user_name,
      password,
    });

    newUser.password = await newUser.encryptPassword(newUser.password);

    newUser.save((error: any) => {
      if (error) {
        res.status(500).json({ error: true, msg: "ERROR SERVER", token: null });
      }

      const token = generateToken(newUser._id, "1d");

      res.json({ error: false, msg: "EVETHING OK", token: token });
    });

    return;
  });
}

export default logNewUser;
