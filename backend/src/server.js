import express from 'express'; // requires type : module in package.json
import notesRoutes from './routes/notesRoutes.js';
import { connectDb } from './config/db.js';
import dotenvx from '@dotenvx/dotenvx'; // use to get access to .env. Use over dotenv so vars can be embedded in other vars

// use dotenvx so env vars can be embedded in other env vars
dotenvx.config();

const app = express();
const PORT = process.env.BACKEND_PORT;

connectDb();

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server started on port: ', PORT);
});
