import express from 'express';
import RNform from '../models/RNform';

const router = express.Router();

router.post('/', (req,res) => {
    RNform.find(req.body).then(user => {
        res.json(user);
    });
});

export default router;
