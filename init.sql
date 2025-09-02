-- Runs automatically on first MySQL start

-- Create greetings table if it does not exist
CREATE TABLE IF NOT EXISTS greetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);

-- Insert meaningful startup messages
INSERT INTO greetings (message) VALUES 
('✅ Database connected successfully — Website is working fine 🚀'),
('🌍 Welcome to the Travel Explorer App — Your gateway to destinations in India 🇮🇳'),
('💡 Pro Tip: This message is coming directly from MySQL — DB integration works!'),
('🔒 Secure setup enabled with Docker + Nginx + SSL support'),
('📊 Monitoring active — containers are being tracked for uptime'),
('🛠 Powered by Node.js + MySQL + Docker Compose on AWS EC2');
