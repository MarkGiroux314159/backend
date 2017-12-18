import express from 'express';
import SchemaTree from '../models/SchemaTree';

const router = express.Router();

router.post('/', (req,res) => {
    const schemaTree = new SchemaTree(req.body);
    schemaTree.save().then((result) => {
        res.json(result.onSuccess());
    })
});

export default router;