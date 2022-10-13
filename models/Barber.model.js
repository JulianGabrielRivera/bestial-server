const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const barberSchema = new Schema({
  name: String,
  email: String,
  password: String,
  experience: String,
  location: String,
  from: String,
});

module.exports = model("Barber", barberSchema);
