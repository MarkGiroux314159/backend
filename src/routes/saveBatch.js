import express from 'express';
import Batch from '../models/Batch';

const router = express.Router();

router.post('/', (req,res) => {
    const bat = new Batch(req.body);
    bat.save().then(result => res.json("Success"));
});

export default router;