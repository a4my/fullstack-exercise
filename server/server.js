const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// configuring CORS for the server to accept requests from the client
app.use(cors());

// Middleware to serve static files
app.use(express.static('public'));

// API endpoints
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
