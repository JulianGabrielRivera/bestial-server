const router = require("express").Router();
const Barber = require("../models/User.model");

router.post("/signup/barber", async (req, res, next) => {
  try {
    const { name, email, password, experience, location, from } = req.body;

    const createdUser = await User.create({
      name,
      password,
      email,
      experience,
      location,
      from,
    });
    res.json({ message: "got it" });
  } catch (err) {
    console.log(err);
  }
});
