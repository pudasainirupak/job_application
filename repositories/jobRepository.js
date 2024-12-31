const db = require('../db/connect');

const createJob = async (jobData) => {
  const query = 'INSERT INTO jobs (title, description, company) VALUES (?, ?, ?)';
  const [result] = await db.query(query, [jobData.title, jobData.description, jobData.company]);
  return { id: result.insertId, ...jobData };
};

const getAllJobs = async () => {
  const query = 'SELECT * FROM jobs';
  const [rows] = await db.query(query);
  return rows;
};

const getJobById = async (id) => {
  const query = 'SELECT * FROM jobs WHERE id = ?';
  const [rows] = await db.query(query, [id]);
  return rows[0];
};

const updateJob = async (id, jobData) => {
  const query = 'UPDATE jobs SET title = ?, description = ?, company = ? WHERE id = ?';
  await db.query(query, [jobData.title, jobData.description, jobData.company, id]);
  return { id, ...jobData };
};

const deleteJob = async (id) => {
  const query = 'DELETE FROM jobs WHERE id = ?';
  await db.query(query, [id]);
};

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };
