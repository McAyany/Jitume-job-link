import express from 'express';
import Application from '../models/Application.js';
import Job from '../models/Job.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

/**
 * @route   POST /api/applications/:jobId/apply
 * @desc    Worker applies for a job
 * @access  Private (worker)
 */
router.post('/:jobId/apply', auth, async (req, res) => {
  try {
    const { coverNote } = req.body;
    const jobId = req.params.jobId;

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    // Prevent employer from applying to their own job
    if (job.employer.toString() === req.userId) {
      return res.status(400).json({ msg: 'You cannot apply to your own job.' });
    }

    // Prevent duplicate application
    const existing = await Application.findOne({ job: jobId, worker: req.userId });
    if (existing) return res.status(400).json({ msg: 'Already applied for this job.' });

    const application = await Application.create({
      job: jobId,
      worker: req.userId,
      coverNote
    });

    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route   GET /api/applications/my
 * @desc    Worker gets their own applications
 * @access  Private (worker)
 */
router.get('/my', auth, async (req, res) => {
  try {
    const applications = await Application.find({ worker: req.userId })
      .populate('job', 'title description location status')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route   GET /api/applications/for-job/:jobId
 * @desc    Employer views applications for a specific job
 * @access  Private (employer)
 */
router.get('/for-job/:jobId', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ msg: 'Job not found' });

    // Ensure only employer who posted can view applications
    if (job.employer.toString() !== req.userId) {
      return res.status(403).json({ msg: 'Not authorized to view applications for this job' });
    }

    const applications = await Application.find({ job: req.params.jobId })
      .populate('worker', 'name skills location contact')
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

/**
 * @route   PATCH /api/applications/:id/status
 * @desc    Employer updates application status (accept/reject)
 * @access  Private (employer)
 */
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body; // expected: 'accepted' or 'rejected'
    const application = await Application.findById(req.params.id).populate('job');

    if (!application) return res.status(404).json({ msg: 'Application not found' });
    if (application.job.employer.toString() !== req.userId) {
      return res.status(403).json({ msg: 'Not authorized to modify this application' });
    }

    application.status = status;
    await application.save();

    res.json({ msg: 'Application status updated', application });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

export default router;
