const express = require('express');
const app = express();
const cors = require('cors');
const getCSSHandler = require('./api/style');
const getTestMessageHandler = require('./api/test');
const PORT = process.env.PORT || 3000;

// configuring CORS for the server to accept requests from the client
app.use(cors());

// Middleware to serve static files
app.use(express.static('public'));

// API endpoints
app.get('/api/test', getTestMessageHandler);
app.get('/api/style', getCSSHandler);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
