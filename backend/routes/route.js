const router = require("express").Router();
const UserSignup = require("../models/userModel");

router.post("/signup", (req, res) => {
  const signUpUser = new UserSignup({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signUpUser.save().then = ((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
