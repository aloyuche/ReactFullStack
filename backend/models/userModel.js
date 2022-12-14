const mongoose = require("mongoose");
const signupTemp = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timeStamp: true }
);

const UserSignup = mongoose.model("SignUp", signupTemp);
module.exports = UserSignup;
