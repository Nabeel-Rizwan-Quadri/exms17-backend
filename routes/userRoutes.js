const express = require("express")
const verifyToken = require('../middlewares/verifyToken')
// const app = express
const router = express.Router()

const { signupUser, loginUser, getUserData } = require("../controllers/userController")

router.post('/signup', signupUser)
router.post('/login', loginUser)

router.post('/getUserData', verifyToken, getUserData)


module.exports = router
