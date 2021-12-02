import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import { User, UserType } from "../models/User";
import generateToken from "./generateToken";

async function loginValidator(req: Request, res: Response, next: NextFunction) {
  const { user_name, password } = req?.body;

  User.findOne(
    { user_name: user_name },
    async (error: Error, document: UserType) => {
      if (error) {
        res.json({ error: true, msg: "Server error on find user.", token:'' });
        return;
      }

      if (!document) {
        res.status(400).json({ error: true, msg: "USER NOT FOUND", token:'' });
        return;
      }

      try {
        let response = await document.checkPassword(password);
        const oneDay = "1d"
        if (response) {
          const token = generateToken(document._id, oneDay);
          res
            .status(200)
            .json({ error: false, token: token, msg: "EVERYTHING OK" });
            return;
        } else {
          res.json({ error: true, token: "", msg: "PASSWORD NOT CORRECT" });
        }
      } catch (error) {}
    }
  );
}

export default loginValidator;
