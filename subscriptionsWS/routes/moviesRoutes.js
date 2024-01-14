import express from 'express';
import Movie from '../models/movieModel.js';
import { getAll } from '../BLL/moviesBLL.js';


const router = express.Router();

router.get('/', async (req, res) => {
   const movies = await getAll();
   
   res.send(movies);
})

export default router;