const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "job",
}).promise();

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
  } else {
    console.log('Connected successfully to the database');
  }
});

module.exports = connection;