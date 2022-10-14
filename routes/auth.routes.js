const router = require("express").Router();
const User = require("../models/User.model");

router.post("/signup/customer", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
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

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
