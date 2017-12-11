import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/', (req,res) => {
    User.find({}, (err,user) => {
        res.send(user);
    })
});

export default router;