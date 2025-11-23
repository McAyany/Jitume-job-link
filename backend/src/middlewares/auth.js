import { clerkClient } from "@clerk/clerk-sdk-node";
import User from "../models/User.js";

const auth = async (req, res, next) => {
  try {
    const clerkUserId = req.headers["x-clerk-user-id"];
    if (!clerkUserId) return res.status(401).json({ error: "Missing Clerk User ID" });

    // Load from DB or create if first time
    let user = await User.findOne({ clerkId: clerkUserId });
    const clerkUser = await clerkClient.users.getUser(clerkUserId);

    if (!user) {
      user = await User.create({
        clerkId: clerkUserId,
        email: clerkUser.emailAddresses?.[0]?.emailAddress || "",
        role: clerkUser.publicMetadata.role || null,
      });
    }

    // Sync role from Clerk
    if (clerkUser.publicMetadata.role && clerkUser.publicMetadata.role !== user.role) {
      user.role = clerkUser.publicMetadata.role;
      await user.save();
    }

    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ error: "Authentication failed" });
  }
};

export default auth;
