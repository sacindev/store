import express, { Request, Response } from "express";

import { User } from "../models/User";

import verifyToken from "../services/verifyToken";

import generateToken from "../services/generateToken";

const router = express.Router();

import loginUser from "../services/loginUser";

import logoutUser from "../services/logoutUser";

import logNewUser from "../services/logNewUser";

router.get("/", async (req: Request, res: Response) => {
  await User.find({}, function (error, users) {
    if (error) res.json({ error: true, result: null });
    res.json({ error: false, result: users });
  });
});

router.get("/:id", async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/verification", verifyToken);

router.post("/new", logNewUser);

router.put("/edit/:id", async (req: Request, res: Response) => {
  // res.json({res:req.body, params: req.params});

  const { first_name, last_name, birthday, email, user_name, password } =
    req.body;

  const newuser = new User({
    first_name,
    last_name,
    birthday,
    email,
    user_name,
    password,
  });

  newuser.password = await newuser.encryptPassword(password);

  await User.findOneAndUpdate({ _id: req.params.id }, newuser);

  res.json({ status: "User Updated" });
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "User Deleted" });
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
