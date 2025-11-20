const express = require('express');
const Job = require('../models/Job');
const User = require('../models/User');

const router = express.Router();

// create job (employer)
router.post('/', async (req, res) => {
  const clerkId = req.headers['x-clerk-user-id'];
  if (!clerkId) return res.status(401).json({ msg: 'No clerk id header' });

  const employer = await User.findOne({ clerkId });
  if (!employer) return res.status(403).json({ msg: 'Create profile first' });

  const job = await Job.create({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    skillsRequired: req.body.skillsRequired || [],
    wage: req.body.wage,
    employer: employer._id
  });

  res.json(job);
});

// list jobs by this employer
router.get('/my', async (req, res) => {
  const clerkId = req.headers['x-clerk-user-id'];
  if (!clerkId) return res.status(401).json({ msg: 'No clerk id header' });
  const employer = await User.findOne({ clerkId });
  if (!employer) return res.status(403).json({ msg: 'No employer profile' });

  const jobs = await Job.find({ employer: employer._id });
  res.json(jobs);
});

module.exports = router;
