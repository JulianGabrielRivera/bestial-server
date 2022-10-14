const express = require("express");

require("dotenv/config");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

mongoose
  .connect("mongodb://localhost:27017/barbershop")
  .then((connectObject) => {
    console.log(`ready for lift off ${connectObject.connections[0].name}`);
  })
  .catch((err) => console.log(err));

app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const barberRoutes = require("./routes/barbers.routes");
app.use("/", barberRoutes);
app.listen("3001", () => {
  console.log("ready to go!");
});
