var express = require('express');
var Batch =  require('../models/Batch');

const router = express.Router();

router.post('/', (req,res) => {
    Batch.update(req.body.info.hash, req.body.info.history).then(result => res.json("Success"));
});

export default router;