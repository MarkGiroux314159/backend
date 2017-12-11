import express from 'express';
import Batch from '../models/Batch';

const router = express.Router();

router.post('/', (req,res) => {
    Batch.update(req.body.info.hash, req.body.info.history).then(result => res.json("Success"));
});

export default router;