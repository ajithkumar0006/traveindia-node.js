-- Runs automatically on first MySQL start
CREATE TABLE IF NOT EXISTS greetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);

-- Insert a more valuable message
INSERT INTO greetings (message) 
VALUES ('✅ Database connected successfully — Website is working fine 🚀');
