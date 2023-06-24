const express = require("express")

require('dotenv').config()

const app = express()
const cors = require("cors")
const db = require("./config/db")

app.use(cors())
app.use(express.json())

const PORT = 5000

db.connection
    .once('open', () => console.log("MongoDB is connected"))
    .on('error', (err) => console.log(`Error in db ${err}`))

app.listen(process.env.PORT, function () {
    console.log(`The server is running on port ${process.env.PORT}`)
})

app.get('/', function (req, res) {
    // Data from client
    // req

    // Data to send to client
    res.send({
        status: 200,
        message: "Api is working",
        data: []
    })
})

app.use('/apis', require('./rootRoute'))
