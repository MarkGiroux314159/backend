var express = require('express');
var RNform = require('../models/RNform');

const router = express.Router();

router.post('/', (req,res) => {
    RNform.find({}).then(form => {
        res.json(form);
    });
});

export default router;