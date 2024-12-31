const applicationService = require('../services/applicationService');

const createApplication = async (req, res) => {
  try {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications(req.query.jobId);
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createApplication, getAllApplications, getApplicationById };
