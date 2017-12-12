var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema({
    batchName: {type: String, required: true},
    workStationName: {type: String, required: true},
    processName: {type: String, required: true},
    nameCompleted: {type: String, required: true},
    dateCompleted: {type: String, required: true},
    nameVerified: {type: String, required: true},
    dateVerified: {type: String, required: true}
});

export default mongoose.model('NFform', schema);