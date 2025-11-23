import express from 'express';
import User from '../models/User.js';

const router = express.Router();

/**
 * @route   GET /api/profile/me
 * @desc    Get current user by Clerk ID header
 * @access  Private
 */
router.get('/me', async (req, res) => {
  try {
    const clerkId = req.headers['x-clerk-user-id'];
    if (!clerkId) return res.status(401).json({ msg: 'No clerk ID header' });

    const user = await User.findOne({ clerkId });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route   POST /api/profile/me
 * @desc    Create or update profile
 * @access  Private
 */
router.post('/me', async (req, res) => {
  try {
    const clerkId = req.headers['x-clerk-user-id'];
    if (!clerkId) return res.status(401).json({ msg: 'No clerk ID header' });

    const payload = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      skills: req.body.skills || [],
      location: req.body.location,
      contact: req.body.contact,
      bio: req.body.bio,
      avatarUrl: req.body.avatarUrl,
    };

    const user = await User.findOneAndUpdate(
      { clerkId },
      { $set: payload },
      { upsert: true, new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route   GET /api/profile/:id
 * @desc    Public worker profile by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'Not found' });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
