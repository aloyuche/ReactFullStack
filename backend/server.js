require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("<h1>WELCOME</h1>");
});

app.listen(
  process.env.PORT,
  console.log(`Server is running on port ${process.env.PORT}`)
);
