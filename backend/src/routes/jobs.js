import express from "express";
import Job from "../models/Job.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

/**
 * @route   POST /api/jobs
 * @desc    Create a job (employer only)
 * @access  Private
 */
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, location, skillsRequired, wage } = req.body;

    const job = await Job.create({
      title,
      description,
      location,
      skillsRequired,
      wage,
      employer: req.userId,
    });

    res.status(201).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

/**
 * @route   GET /api/jobs
 * @desc    List jobs with optional filters
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const { q, skill, location } = req.query;
    const filter = {};

    if (skill) filter.skillsRequired = skill;
    if (location) filter.location = location;
    if (q) filter.$text = { $search: q };

    const jobs = await Job.find(filter).populate("employer", "name contact");
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

/**
 * @route   GET /api/jobs/:id
 * @desc    Get job by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("employer", "name contact");
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
