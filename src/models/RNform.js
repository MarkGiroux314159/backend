import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema({
    batchHash: {type: String},
    batchName: {type: String},
    schemaName: {type: String},
    workStationName: {type: String},
    processName: {type: String},
    historyElem: {type: Number},

    nameOfMaterial: {type: String},
    materialID: {type: String},
    quality: {type: String},
    weight: {type: String},
    supplier: {type: String},

    source: {type: String},
    ingredient: {type: String},
    ref: {type: String},
    
    completed: {type: String},
    formCompletedName: {type: String},
    dateCompleted: {type: String},
    verified: {type: String},
    formVerifiedName: {type: String},
    dateVerified: {type: String},
});

schema.methods.postSuccess = function postSuccess(){
    return {
        message: "Success"
    }
}

schema.methods.postFailure = function postFailure(){
    return {
        message: "Failure"
    }
}

export default mongoose.model('RNform', schema);