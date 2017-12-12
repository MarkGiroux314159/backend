var express = require('express');
var User = require('../models/User');

const router = express.Router();

router.post('/', (req,res) => {
    User.find({}, (err,user) => {
        res.send(user);
    })
});

export default router;