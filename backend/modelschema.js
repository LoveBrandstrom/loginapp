const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bread: {
        type: String,
        required: true
    }
})

const Model = mongoose.model('Model', Schema)
module.exports = Model