const authModel = require("../models/users");

const checkAuth = (req, res) => {
  if (
    req.body.username == authModel.getUser().username &&
    req.body.password == authModel.getUser().password
  ) {
    return res.status(200).send("Login Successful");
  } else {
    return res.status(403).send("Incorrect Credentials");
  }
};

module.exports = { checkAuth };
