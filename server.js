const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

// Use CORS middleware to allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:5000', // Adjust as needed for your environment
}));

// Set security-related HTTP headers using Helmet
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for simplicity in development
}));

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Serve static files from 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/property-listings', {

}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use user routes


// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
