import mongoose from 'mongoose';
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['open','closed'], default: 'open' },
  skillsRequired: [String],
  wage: String
}, { timestamps: true });
export default mongoose.model('Job', jobSchema);
