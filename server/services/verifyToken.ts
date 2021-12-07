import { Request, Response } from "express";
import { User, UserType } from "../models/User";
import jwt from "jsonwebtoken";
import { Error } from "mongoose";

function verifyToken(req: Request, res: Response) {
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
          res.status(500).json({ error: true, msg: error.msg });
        } else {

          User.findOne({ _id: decoded.id}, (err: Error, document: UserType) => {
          console.log(err, document);
              
            if (err) {
              res
              .status(500)
              .json({ error: true, result: null, msg: "USER_NOT_FOUND" });
              return;
            }
            
            if (!document) {
              res
              .status(500)
              .json({ error: true, result: null, msg: "USER_NOT_FOUND" });
              return;
            }else{
              res
              .status(200)
              .json({error: false, result: document, msg: "EVERYTHING_OK"});
              return;

            }
            }
          );
        }
      }
    );
  } catch (error) {
    throw new Error("Something is wrong on verifyToken");
  }
}

export default verifyToken;
