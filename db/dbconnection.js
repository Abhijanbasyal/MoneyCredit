import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connected successfully');
    client.release(); 
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
    process.exit(1);
  }
};

// Export pool for use in other files
export { pool, connectDB };