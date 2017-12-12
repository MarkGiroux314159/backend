var express = require('express');
var User = require('../models/User');

const router = express.Router();

router.post('/', (req,res) => {
    const {credentials} = req.body;
    User.findOne({confirmationToken: credentials.confirmationToken}).then(user => {
        res.json({user: user.toAuthJSON()});
    });
});

export default router;
