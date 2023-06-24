const mongoose = require("mongoose")




mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.slacs61.mongodb.net/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`)

module.exports = mongoose