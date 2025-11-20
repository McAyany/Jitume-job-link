const express = require("express");
const User = require("../models/User.js");

const router = express.Router();

// get all users (admin only)
router.get('/', async (req,res) => {
  const users = await User.find().select('-passwordHash');
  res.json(users);
});

// get user by id
router.get('/:id', async (req,res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');
  res.json(user);
});

module.exports = router;