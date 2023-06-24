const express = require("express")
// const app = express
const router = express.Router()

router.use('/user', require('./routes/userRoutes'))

router.use('/ad', (req, res) => {
    res.send({
        status: 200,
        message: "ad Api is working",
        data: []
    })
  })
router.use('/todo', require('./routes/todoRoutes'))

module.exports = router