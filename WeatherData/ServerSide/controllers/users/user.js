const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  let user = await User.findOne({ email: email });
  let token;
  if (user) {
    // TODO decrypt password
    console.log(user.password, password);
    if (user.password === password) {
      token = jwt.sign({ email: email }, "lkjglkgjrewljgljligrj");
      return res.json(token);
    }
    else {
        return res.send({message: "Wrong email or password"})
    }
  } else {
    res.status(403);
    res.json({ error: "Wrong credentials" });
  }
});
module.exports = router;
