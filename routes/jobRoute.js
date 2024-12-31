const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const { validateJob } = require('../middlewares/validationMiddleware');
const jobController = require('../controllers/jobController');
const router = express.Router();

router.post('/', authenticate, validateJob, jobController.createJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put('/:id', authenticate, validateJob, jobController.updateJob);
router.delete('/:id', authenticate, jobController.deleteJob);

module.exports = router;