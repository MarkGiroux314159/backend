import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/', (req,res) =>{
    const info = req.body;
    const user = new User({email: info.email});
    user.generatePasswordHash(info.password);
    user.save().then((result) =>{
        res.json({user: result.toAuthJSON()});
    }).catch(err => res.status(400).json({errors: {global: "Email Aready Used"}}));
});

export default router;
