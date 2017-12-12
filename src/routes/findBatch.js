var express = require('express');
var Batch = require('../models/Batch');

const router = express.Router();

router.post('/', (req,res) => {
    Batch.find(req.body).then(batch => {
        res.json(batch);
    });
});

export default router;