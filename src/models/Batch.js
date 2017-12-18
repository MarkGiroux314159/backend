import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const historySchema = new mongoose.Schema({
    value: {type: Number}
});

const schema = new mongoose.Schema({
    name: {type: String, required: true}, 
    date: {type: String, required: true},
    hash: {type: String, required: true}, 
    history: [historySchema],
    deployed: {type: Boolean},
    serialStart: {type: Number},
    serialEnd: {type: Number}
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

export default mongoose.model('Batch', schema);