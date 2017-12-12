var express = require('express');
var User = require('../models/User');

const router = express.Router();

router.post('/', (req,res) => {
    User.remove({}).catch(err => res.status(400).json({errors: "Could not Clear database"}));
});

export default router;