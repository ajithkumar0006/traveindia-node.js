-- Runs automatically on first MySQL start

-- Create greetings table if it does not exist
CREATE TABLE IF NOT EXISTS greetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);

-- Insert user-friendly travel content
INSERT INTO greetings (message) VALUES
('🏝 Visit Goa — Relax on sunny beaches & enjoy vibrant nightlife 🌊'),
('⛰ Explore Manali — Adventure sports & breathtaking Himalayan views 🏔'),
('🏰 Discover Jaipur — The Pink City full of palaces & heritage forts 🕌'),
('🌆 Experience Mumbai — The city that never sleeps 💃'),


