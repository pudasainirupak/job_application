const jobRepository = require('../repositories/jobRepository');

const createJob = async (jobData) => jobRepository.createJob(jobData);

const getAllJobs = async () => jobRepository.getAllJobs();

const getJobById = async (id) => jobRepository.getJobById(id);

const updateJob = async (id, jobData) => jobRepository.updateJob(id, jobData);

const deleteJob = async (id) => jobRepository.deleteJob(id);

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };