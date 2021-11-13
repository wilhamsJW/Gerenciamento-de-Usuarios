const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    location: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);