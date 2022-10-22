const router = require("express").Router();
const UserSignup = require("../models/userModel");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePass = await bcrypt.hash(req.body.password, saltPassword);
  const signUpUser = new UserSignup({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: securePass,
  });
  signUpUser.save().then = ((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
