var express = require('express');
var Batch = require('../models/Batch');

const router = express.Router();

router.post('/', (req,res) => {
    const bat = new Batch(req.body);
    bat.save().then(result => res.json("Success"));
});

export default router;