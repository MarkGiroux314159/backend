var generateDoc = require('../fileHandling/carReport');
var express = require('express');

const router = express.Router();

router.post("/", (req,res) => {
    var data = req.body;
    generateDoc(req.body);
    return res.json("Saved");
});

export default router;