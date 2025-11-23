import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String },
  role: { type: String, enum: ["worker", "employer"], default: null },

  // For workers
  workerProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
    default: null
  },

  // For employers (stores their jobs)
  jobsPosted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  }]
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
