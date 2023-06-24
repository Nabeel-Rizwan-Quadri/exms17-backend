const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        // required: true
    }
})

const todoCheck = mongoose.model('todos', todoSchema)

module.exports = todoCheck
