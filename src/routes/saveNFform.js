import express from 'express';
import NFform from '../models/NFform';

const router = express.Router();

router.post('/', (req,res) => {
    const {info} = req.body;
    const nf = new NFform(info);
    nf.save().then(result => res.json("Success"));
});

export default router;