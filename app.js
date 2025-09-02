const express = require("express");
const db = require("./dbconfig");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT message FROM greetings LIMIT 1");
    const dbMessage = rows[0]?.message || "Welcome to India!";

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Incredible India ✈️</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4);
            color: #333;
            margin: 0;
            padding: 0;
          }
          header {
            background: rgba(0,0,0,0.7);
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 2rem;
            letter-spacing: 2px;
          }
          .hero {
            height: 70vh;
            background: url('https://upload.wikimedia.org/wikipedia/commons/1/1e/Taj_Mahal_in_March_2004.jpg') center/cover no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-shadow: 0 2px 6px rgba(0,0,0,0.7);
            flex-direction: column;
          }
          .hero h1 {
            font-size: 3rem;
            margin: 0;
          }
          .hero p {
            font-size: 1.5rem;
          }
          .content {
            padding: 40px;
            text-align: center;
          }
          .content h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .card {
            background: #fff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .card img {
            width: 100%;
            border-radius: 12px;
            height: 180px;
            object-fit: cover;
          }
          .card h3 {
            margin: 15px 0 10px;
          }
          footer {
            background: #222;
            color: #ccc;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
          }
        </style>
      </head>
      <body>
        <header>🌍 Incredible India</header>
        
        <section class="hero">
          <h1>Discover the Beauty of India</h1>
          <p>${dbMessage}</p>
        </section>

        <section class="content">
          <h2>Top Destinations</h2>
          <div class="cards">
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Varanasi_City_Ganga.jpg" alt="Varanasi" />
              <h3>Varanasi</h3>
              <p>Spiritual capital of India with the sacred Ganges River.</p>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Kerala_Backwaters.jpg" alt="Kerala" />
              <h3>Kerala</h3>
              <p>Peaceful backwaters and lush green landscapes.</p>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Himalaya_mountains.jpg" alt="Himalayas" />
              <h3>Himalayas</h3>
              <p>Adventure and serenity in the world's highest mountains.</p>
            </div>
            <div class="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Goa_Beach.jpg" alt="Goa" />
              <h3>Goa</h3>
              <p>Golden beaches, nightlife, and Portuguese heritage.</p>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2025 Incredible India | Built with Node.js & Docker 🚀</p>
        </footer>
      </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(`
      <h1 style="color:red; text-align:center; margin-top:20%">⚠️ DB Connection Error</h1>
      <pre style="text-align:center">${err.message}</pre>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
