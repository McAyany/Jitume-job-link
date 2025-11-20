const express = require('express');
const User = require('../models/User');

const router = express.Router();

// get current user by clerkId header (frontend sends x-clerk-user-id)
router.get('/me', async (req, res) => {
  const clerkId = req.headers['x-clerk-user-id'];
  if (!clerkId) return res.status(401).json({ msg: 'No clerk id header' });
  const user = await User.findOne({ clerkId });
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
});

// create or update profile
router.post('/me', async (req, res) => {
  const clerkId = req.headers['x-clerk-user-id'];
  if (!clerkId) return res.status(401).json({ msg: 'No clerk id header' });

  const payload = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    skills: req.body.skills || [],
    location: req.body.location,
    contact: req.body.contact,
    bio: req.body.bio,
    avatarUrl: req.body.avatarUrl
  };

  let user = await User.findOneAndUpdate({ clerkId }, { $set: payload }, { upsert: true, new: true });
  res.json(user);
});

// public worker profile by id
router.get('/:id', async (req,res) => {
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({ msg: 'Not found' });
  res.json(user);
});

module.exports = router;
