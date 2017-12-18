import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const processSchema = new mongoose.Schema({
    name: {type: String},
    id: {type: Number}
});

const workStationSchema = new mongoose.Schema({
    name: {type: String},
    id: {type: Number},
    processes: [processSchema]
});

const schema = new mongoose.Schema({
    name: {type: String},
    id: {type: Number},
    workStations: [workStationSchema]
});

schema.methods.onSuccess = function onSuccess(){
    return {message: "Saved to Database"};
}

export default mongoose.model('SchemaTree', schema)