const mongoose = require('mongoose'); //conexão com o Db utilizando o mongoose que facilita nossa conexão com o mongodb

const UserSchema = new mongoose.Schema({
    name: String,
    location: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);