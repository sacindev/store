const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);

});

// GET all users
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ADD a new user
router.post("/", async (req, res) => {
  const {
    first_name,
    last_name,
    born,
    list_products,
    email,
    user_name,
    password,
  } = req.body;
  const user = new User({
    first_name,
    last_name,
    born,
    list_products,
    email,
    user_name,
    password,
  });
  await user.save();
  res.json({ status: "User Saved" });
});

// UPDATE a new user
router.put("/:id", async (req, res) => {
  const {
    first_name,
    last_name,
    born,
    list_products,
    email,
    user_name,
    password,
  } = req.body;
  const newuser = {
    first_name,
    last_name,
    born,
    list_products,
    email,
    user_name,
    password,
  };
  await User.findByIdAndUpdate(req.params.id, newuser);
  res.json({ status: "User Updated" });
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "User Deleted" });
});

module.exports = router;
