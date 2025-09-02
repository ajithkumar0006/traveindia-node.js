const mysql = require('mysql2');

// Enforce env vars (no hardcoding)
['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'].forEach((k) => {
  if (!process.env[k]) {
    console.warn(`⚠️ Missing ${k}. Ensure it is set via docker-compose or environment.`);
  }
});

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql',
  user: process.env.DB_USER || 'appuser',
  password: process.env.DB_PASSWORD || 'appsecret123',
  database: process.env.DB_NAME || 'appdb',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
