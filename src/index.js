var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var getInfo = require('./routes/getInfo');
var saveInfo = require('./routes/saveInfo');
var clearDB = require('./routes/clearDB');
var authorize = require('./routes/authorize');
var findToken = require('./routes/findToken');
var saveNFform = require('./routes/saveNFform');
var saveRNform = require('./routes/saveRNform');
var clearFormData = require('./routes/clearFormData');
var findRNform = require('./routes/findForm');
var authorizeNF = require('./routes/authorizeNF');
var saveSchemaTree = require('./routes/saveSchemaTree');
var loadSchemaTree = require('./routes/loadSchemaTree');
var createDoc = require('./routes/createDoc');
var saveBatch = require('./routes/saveBatch');
var updateBatch = require('./routes/updateBatch');
var findBatch = require('./routes/findBatch');
var findAllForms = require('./routes/findAllForms');
var updateRNform = require('./routes/updateRNform');
var findAllBatches = require('./routes/findAllBatches');

const app = express();

var port = process.env.PORT || 8080; // change to just 8080 for local

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

//mongoose.connect("mongodb://localhost/usersinfo", {useMongoClient: true }); // use this for local
mongoose.connect("mongodb://markgiroux:blahblah@ds135966.mlab.com:35966/db3141", {useMongoClient: true });

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

app.listen(port, () => console.log("Running on port 8080"));