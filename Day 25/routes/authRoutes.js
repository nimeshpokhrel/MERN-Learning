const express = require("express");
const { checkAuth } = require("../controllers/auth");
const { checkBodyData } = require("../middlewares/users");

const router = express.Router();

router.post("/login", checkBodyData, checkAuth);

module.exports = router;