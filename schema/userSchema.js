const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    }
})

const userCheck = mongoose.model('users', userSchema)

module.exports = userCheck
