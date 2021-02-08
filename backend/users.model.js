const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let users = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('users', users);
