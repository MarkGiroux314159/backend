var express = require('express');
var RNform = require('../models/RNform');

const router = express.Router();

router.post('/', (req,res) => {
    RNform.update(req.body.info.hash, req.body.info.verified).then(result => {
        res.json("Success");
    });
});

export default router;