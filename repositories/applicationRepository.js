const db = require('../db/connect');

const createApplication = async (applicationData) => {
    const query = 'INSERT INTO applications (name, email, resumeUrl, jobId) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [applicationData.name, applicationData.email, applicationData.resumeUrl, applicationData.jobId]);
    return { id: result.insertId, ...applicationData };
};

const getAllApplications = async (jobId) => {
    const query = jobId ? 'SELECT * FROM applications WHERE jobId = ?' : 'SELECT * FROM applications';
    const [rows] = await db.query(query, jobId ? [jobId] : []);
    return rows;
};

const getApplicationById = async (id) => {
    const query = 'SELECT * FROM applications WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
};

module.exports = { createApplication, getAllApplications, getApplicationById };
