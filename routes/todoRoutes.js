const express = require("express")
// const app = express
const router = express.Router()

const { create, read, del, update } = require("../controllers/todoController")

router.post('/create', create)
router.post('/delete', del)
router.post('/update', update)
router.get('/read', read)

module.exports = router
