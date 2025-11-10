import express from 'express';
import Job from '../models/Job.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

// create job (employer only)
router.post('/', auth, async (req,res) => {
  const { title, description, location, skillsRequired, wage } = req.body;
  const job = await Job.create({ title, description, location, skillsRequired, wage, employer: req.userId });
  res.json(job);
});

// list jobs (with simple filter)
router.get('/', async (req,res) => {
  const { q, skill, location } = req.query;
  const filter = {};
  if(skill) filter.skillsRequired = skill;
  if(location) filter.location = location;
  if(q) filter.$text = { $search: q }; // add text index if you want
  const jobs = await Job.find(filter).populate('employer','name contact');
  res.json(jobs);
});

router.get('/:id', async (req,res) => {
  const job = await Job.findById(req.params.id).populate('employer','name contact');
  res.json(job);
});

export default router;
