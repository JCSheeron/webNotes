import express from 'express'; // requires type : module in package.json
import notesRoutes from './routes/notesRoutes.js';
import { connectDb } from './config/db.js';
import dotenvx from '@dotenvx/dotenvx'; // use to get access to .env. Use over dotenv so vars can be embedded in other vars
import rateLimiter from './middleware/rateLimiter.js';

// use dotenvx so env vars can be embedded in other env vars
dotenvx.config();

const app = express();
const PORT = process.env.BACKEND_PORT;

// Move connect down below.
// A small production optimization: Only start to listen if the db connects
// connectDb();

// middleware
app.use(express.json()); // parse JSON bodies. Get access to req/body
app.use(rateLimiter); // rate limiter using upstash
// simple custom middleware example
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next(); // next function in the chain
});

app.use('/api/notes', notesRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on port: ', PORT);
  });
});
