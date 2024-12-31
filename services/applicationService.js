const applicationRepository = require('../repositories/applicationRepository');

const createApplication = async (applicationData) => applicationRepository.createApplication(applicationData);

const getAllApplications = async (jobId) => applicationRepository.getAllApplications(jobId);

const getApplicationById = async (id) => applicationRepository.getApplicationById(id);

module.exports = { createApplication, getAllApplications, getApplicationById };