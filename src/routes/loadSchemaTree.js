var express = require('express');
var SchemaTree = require('../models/SchemaTree');

const router = express.Router();

router.post('/', (req,res) => {
    SchemaTree.find({}).then(tree => {
        res.json(tree);
    });
});

export default router;