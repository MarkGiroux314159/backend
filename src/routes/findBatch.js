import express from 'express';
import Batch from '../models/Batch';

const router = express.Router();

router.post('/', (req,res) => {
    Batch.find(req.body).then(batch => {
        res.json(batch);
    });
});

export default router;