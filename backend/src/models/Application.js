import mongoose from 'mongoose';
const appSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending','accepted','rejected'], default: 'pending' },
  coverNote: String
}, { timestamps: true });
export default mongoose.model('Application', appSchema);
