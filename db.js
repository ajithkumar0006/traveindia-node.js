// db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'superpassword123',
  database: process.env.DB_NAME || 'mysqldb'
});

module.exports = pool;
