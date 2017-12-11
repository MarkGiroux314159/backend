import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongojs from 'mongojs';
import mongoose from 'mongoose';
import getInfo from './routes/getInfo';
import saveInfo from './routes/saveInfo';
import clearDB from './routes/clearDB';
import authorize from './routes/authorize';
import findToken from './routes/findToken';
import saveNFform from './routes/saveNFform';
import saveRNform from './routes/saveRNform';
import clearFormData from './routes/clearFormData';
import findRNform from './routes/findForm';
import authorizeNF from './routes/authorizeNF';
import saveSchemaTree from './routes/saveSchemaTree';
import loadSchemaTree from './routes/loadSchemaTree';
import createDoc from './routes/createDoc';
import saveBatch from './routes/saveBatch';
import updateBatch from './routes/updateBatch';
import findBatch from './routes/findBatch';
import findAllForms from './routes/findAllForms';
import updateRNform from './routes/updateRNform';
import findAllBatches from './routes/findAllBatches';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/get', getInfo);
app.use('/api/save', saveInfo);
app.use('/api/clear', clearDB);
app.use('/api/auth', authorize);
app.use('/api/findToken', findToken);
app.use('/api/NFform', saveNFform);
app.use('/api/RNform', saveRNform);
app.use('/api/clearFormData', clearFormData);
app.use('/api/findRNform',findRNform);
app.use('/api/authNF', authorizeNF);
app.use('/api/saveSchemaTree', saveSchemaTree);
app.use('/api/loadSchemaTree', loadSchemaTree);
app.use('/api/createDoc', createDoc);
app.use('/api/saveBatch', saveBatch);
app.use('/api/updateBatch',updateBatch);
app.use('/api/findBatch',findBatch);
app.use('/api/findAllForms', findAllForms);
app.use('/api/updateRNform', updateRNform);
app.use('/api/findAllBatches', findAllBatches);

mongoose.connect("mongodb://localhost/usersinfo", {useMongoClient: true });
//mongoose.connect("mongodb://mark3141:Blahblah123$@ds135966.mlab.com:35966/db3141", {useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

/*
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});
*/

app.listen(8080, () => console.log("Running on port 8080"));