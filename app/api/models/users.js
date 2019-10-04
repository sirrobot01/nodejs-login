const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//Schema
const Schema = mongoose.Schema;


//user schema

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
});

UserSchema.pre('save', (next) => {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});


module.exports = mongoose.model('User', UserSchema);