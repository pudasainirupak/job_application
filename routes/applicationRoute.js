const express = require('express');
const { validateApplication } = require('../middlewares/validationMiddleware');
const applicationController = require('../controllers/applicationController');
const router = express.Router();

router.post('/', validateApplication, applicationController.createApplication);
router.get('/', applicationController.getAllApplications);
router.get('/:id', applicationController.getApplicationById);

module.exports = router;