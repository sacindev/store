import { Request, Response } from "express";
import generateToken from "./generateToken";
import jwt from "jsonwebtoken";
import { User, UserType } from "../models/User";
function logoutUser(req: Request, res: Response) {
  const dotenv = require("dotenv");

  dotenv.config();

  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  try {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET as jwt.Secret,
      (error: any, decoded: any) => {
        if (error) {
          res.status(403).json({ error: false, msg: "EXPIRED_TOKEN", token: null});
        } else {
          User.findOne({ _id: decoded.id }, (err: Error, document: UserType) => {
              const oneSecond = "1"

              if (err) {
                res
                .status(500)
                .json({error: true, msg: 'USER NOT FOUND', token: null})
                  
              }

            if(!document){
                res.json({error: true, msg: 'USER NOT FOUND', token: null})
                return;
            }else {
                const token = generateToken(document.user_name, oneSecond);
                res.json({error: false, msg: 'USER NOT FOUND', token:token})
                return;
            }

          });
        }
      }
    );
  } catch (error) {
    throw new Error("Something is wrong on verifyToken");
  }
}

export default logoutUser;
