import express from 'express';
import dotenv from 'dotenv';
// import connectDB from './db/connection.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
// connectDB();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express server! Database connected.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});