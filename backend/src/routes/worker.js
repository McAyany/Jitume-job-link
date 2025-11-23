import express from "express";
import Worker from "../models/Worker.js";
import User from "../models/User.js";
import auth from "../middlewares/auth.js";
import { requireWorker } from "../middlewares/roles.js";

const router = express.Router();

// Create or update worker profile
router.post("/profile", auth, requireWorker, async (req, res) => {
  const existing = await Worker.findOne({ userId: req.user.clerkId });

  if (existing) {
    Object.assign(existing, req.body);
    await existing.save();
    return res.json(existing);
  }

  const profile = await Worker.create({
    userId: req.user.clerkId,
    ...req.body
  });

  req.user.workerProfile = profile._id;
  await req.user.save();

  res.json(profile);
});

// Get worker own profile
router.get("/me", auth, requireWorker, async (req, res) => {
  const profile = await Worker.findOne({ userId: req.user.clerkId });
  res.json(profile);
});

// Public workers list
router.get("/all", async (req, res) => {
  const workers = await Worker.find();
  res.json(workers);
});

export default router;
