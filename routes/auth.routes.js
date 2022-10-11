const router = require("express").Router();
const User = require("../models/User.model");

router.post("/signup", async (req, res, next) => {
  try {
    const createdUser = await User.create({
      username,
      password,
      email,
    });
    res.json({ message: "got it" });
  } catch (err) {
    console.log(err);
  }
});
