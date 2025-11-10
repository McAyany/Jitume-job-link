import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  passwordHash: String,
  role: { type: String, enum: ['worker','employer','admin'], required: true },
  skills: [String],
  location: String,
  contact: String,
  bio: String,
  rating: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.model('User', userSchema);
