import express from 'express';
import dotenv from 'dotenv';
import membersRoutes from './routes/membersRoutes.js';
import moviesRoutes from './routes/moviesRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 2000;

connectDB();

const app = express();

app.use('/members', membersRoutes);

app.use('/movies', moviesRoutes);

app.listen(port, () => console.log(`listening on ${port}`));
