const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "bpeekeeauglchcxvaebr-mysql.services.clever-cloud.com",
  user: "uledd7fhvbxaykcc",
  password: "CjqUwuT8s2sdke8U81ED",
  database: "bpeekeeauglchcxvaebr",
}).promise();

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
  } else {
    console.log('Connected successfully to the database');
  }
});

module.exports = connection;