var express = require('express');
var SchemaTree = require ('../models/SchemaTree');

const router = express.Router();

router.post('/', (req,res) => {
    const schemaTree = new SchemaTree(req.body);
    schemaTree.save().then((result) => {
        res.json(result.onSuccess());
    })
});

export default router;