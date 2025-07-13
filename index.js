// server.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/dbconnection.js';

// Load environment variables early
dotenv.config();

// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware (if needed later)
// app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Express server! Database connected.');
});

// Start app after DB connects
const startServer = async () => {
  await connectDB(); // Connect to PostgreSQL first

  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
};

startServer();
