var express = require('express');
var NFform = require('../models/NFform');

const router = express.Router();

router.post('/', (req,res) => {
    NFform.remove({}).catch(err => res.status(400).json({errors: "Could not Clear database"}));
});

export default router;