import express from "express"
import { Error } from "mongoose";
const router = express.Router();
import { User } from "../models/User"
const generateToken = require("../services/generateToken");
const verifyToken = require("../services/verifyToken");

router.get("/", async (req: any, res: any) => {
  await User.find({}, function (error, users) {
    if(error) res.json({error: true, result: null})
    res.json({error: false, result: users})
  });

});

router.get("/:id", async (req: any, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Login
router.post("/login", async (req: any, res) => {
  const { user_name, password } = req.body;

  await User.findOne({ user_name: user_name }, async (err: any, user: any) => {
    if (err) throw err;

    if (!user) {
      res.status(400).json({ error: true, result: null, msg: "USER_NOT_FOUND" });
    } else {
      try {
        let response = await user.checkPassword(password);
        if (response){
          let token = await generateToken(JSON.stringify(user._id));
          res
          .cookie("store", token)
          .json({ error: false, result: token, msg: "SUCCESS"})
        } else {
          res.json({ error: true, result: null, msg: "PASSWORD NOT CORRECT"});
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
});

// Verification Token
router.post("/verification", verifyToken, (req: any, res: any) => {
  console.log(req.user);
  
   User.findOne({ _id: JSON.parse(req.user.id) }, (err: any, user: any) => {
    if (err) {
      res.status(200).json({  error: true, result: null, msg: err.message});
    } else {
      res.status(200).json({  error: false, result: user, msg: "ALL_CORRECT"});
    }
  });
});

//Add User
router.post("/new", (req: any, res: any) => {
  const {
    first_name,
    last_name,
    birthday,
    email,
    user_name,
    password,
  } = req.body;

  User.findOne({ email: email }, async (err: any, user: any) => {
    if (err) throw err;
    if (!user) {
      const user = new User({
        first_name,
        last_name,
        birthday,
        email,
        user_name,
        password,
      });

      user.password = await user.encryptPassword(user.password);

      await user.save();

      let token = await generateToken(JSON.stringify(user._id));

      res.json({ status: "User Saved", token: user });
    } else {
      res.json({ res: "Existing User" });
    }
  });
});

// UPDATE a new user
router.put("/edit/:id", async (req, res) => {
  // res.json({res:req.body, params: req.params});

  const {
    first_name,
    last_name,
    birthday,
    email,
    user_name,
    password,
  } = req.body;

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

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "User Deleted" });
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
