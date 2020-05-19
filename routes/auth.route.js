users = [];
const express = require("express");
const userController = require("../controllers/user.controller");
const asyncHandler = require("express-async-handler");

const router = express.Router();

//localhost: 5000
router.post("/register", asyncHandler(insert));

async function insert(req, res, next) {
  const user = req.body;
  console.log(`registering user`, user);
  const savedUser = await userController.insert(user);
  res.json(savedUser);
}

module.exports = router;
