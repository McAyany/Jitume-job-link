import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: String,
  location: String,
  avatarUrl: String,
  skills: [String],
  bio: String
}, { timestamps: true });

// Use existing model if it exists, otherwise create it
const Worker = mongoose.models.Worker || mongoose.model("Worker", WorkerSchema);

export default Worker;
