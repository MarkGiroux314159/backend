import express from 'express';
import RNform from '../models/RNform';

const router = express.Router();

router.post('/', (req,res) => {
    const nf = new RNform(req.body);
    nf.save().then(result => {
        res.json(nf.postSuccess());
    }).catch((err) => {
        res.json(nf.postFailure());
    });
});

export default router;