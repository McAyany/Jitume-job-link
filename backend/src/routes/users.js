import express from "express";
import User from "../models/User.js";

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users (admin only) or search workers
 * @access  Private (admin or public search)
 */
router.get("/", async (req, res) => {
  try {
    const q = req.query.q || "";

    // If query is present, filter for workers by name or skills
    if (q) {
      const filter = {
        role: "worker",
        $or: [{ name: new RegExp(q, "i") }, { skills: new RegExp(q, "i") }],
      };
      const users = await User.find(filter).limit(100).select("-passwordHash");
      return res.json(users);
    }

    // No query → return all users (admin only)
    const users = await User.find().select("-passwordHash");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

/**
 * @route   GET /api/users/:id
 * @desc    Get user by ID
 * @access  Private
 */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-passwordHash");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
