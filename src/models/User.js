import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcryptjs';

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, required: true, lowercase: true, index: true, unique: true},
    passwordHash: String,
    confirmationToken: String
});

schema.methods.generateToken = function generateToken(){
    return this.email;
}

schema.methods.generatePasswordHash = function generatePasswordHash(password){
    this.passwordHash = bcrypt.hashSync(password,10);
}

schema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
}

schema.methods.toAuthJSON = function toAuthJSON(){
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        token: this.generateToken()
    }
}

schema.plugin(uniqueValidator, {message: "This email is already taken"});

export default mongoose.model('Users',schema);



