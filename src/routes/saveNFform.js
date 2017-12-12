var express = require ('express');
var NFform = require('../models/NFform');

const router = express.Router();

router.post('/', (req,res) => {
    const {info} = req.body;
    const nf = new NFform(info);
    nf.save().then(result => res.json("Success"));
});

export default router;