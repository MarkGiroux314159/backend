import express from 'express';
import RNform from '../models/RNform';

const router = express.Router();

router.post('/', (req,res) => {
    RNform.find({}).then(form => {
        res.json(form);
    });
});

export default router;