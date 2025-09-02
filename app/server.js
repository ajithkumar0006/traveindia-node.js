const express = require('express');
const db = require('./dbconfig');

const app = express();
const PORT = 3000;

// Test DB connection
(async () => {
  try {
    const [rows] = await db.query("SELECT 1");
    console.log("DB test OK:", rows);
  } catch (err) {
    console.error("DB test failed:", err);
  }
})();

app.get('/greetings', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM greetings');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));