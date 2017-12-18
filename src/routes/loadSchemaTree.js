import express from 'express';
import SchemaTree from '../models/SchemaTree';

const router = express.Router();

router.post('/', (req,res) => {
    SchemaTree.find({}).then(tree => {
        res.json(tree);
    });
});

export default router;