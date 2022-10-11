const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const barberSchema = new Schema({
  name: String,
  experience: String,
  location: String,
  from: String,
});

module.exports = model("Barber", barberSchema);
