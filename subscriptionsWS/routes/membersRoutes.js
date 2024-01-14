import express from 'express';
import { getAll } from '../BLL/membersBLL.js';
import Member from '../models/memberModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const members = await getAll();

    res.send(members);
})

export default router;

