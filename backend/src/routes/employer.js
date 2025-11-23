import express from "express";
import Job from "../models/Job.js";
import User from "../models/User.js";
import auth from "../middlewares/auth.js";
import { requireEmployer } from "../middlewares/roles.js";

const router = express.Router();

// POST a job
router.post("/",auth, requireEmployer, async (req, res) => {
  const job = await Job.create({
    employerId: req.user.clerkId,
    ...req.body
  });

  req.user.jobsPosted.push(job._id);
  await req.user.save();

  res.json(job);
});

// Get employer's own jobs
router.get("/my", auth, requireEmployer, async (req, res) => {
  const jobs = await Job.find({ employerId: req.user.clerkId });
  res.json(jobs);
});

export default router;
