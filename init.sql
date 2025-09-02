-- Runs automatically on first MySQL start
CREATE TABLE IF NOT EXISTS greetings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);

INSERT INTO greetings (message)
VALUES (' Database connected successfully  Welcome India');
