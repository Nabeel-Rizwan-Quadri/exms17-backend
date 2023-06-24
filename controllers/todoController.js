const todoCheck = require("../schema/todoSchema")

let todo = [{
    text: "Complete Assignment"
},
{
    text: "Ask for more Assignments"
}
]

module.exports.create = async (req, res) => {
    console.log("req body", req.body)
    const { text } = req.body

    const new_data = new todoCheck({
        text
    })

    const new_dataRes = await new_data.save()

    console.log("new_dataRes", new_dataRes)

    todo.push({ text: req.body.text })

    res.send({
        status: 200,
        message: "create Api is working",
        // data: todo
    })
}

module.exports.read = async (req, res) => {

    const todoCheckRes = await todoCheck.find()
    console.log("res", todoCheckRes)

    res.send({
        status: 200,
        message: "read Api is working",
        data: todoCheckRes
    })
}

module.exports.del = async (req, res) => {
    const { _id } = req.body
    console.log("_id", _id)

    const todoCheckRes = await todoCheck.deleteOne({ _id })
    console.log("res", todoCheckRes)

    res.send({
        status: 200,
        message: "del Api is working",
        // data: todoCheckRes
    })
}

module.exports.update = async (req, res) => {
    const { _id, text } = req.body
    console.log("_id, text", _id, text)

    const todoCheckRes = await todoCheck.findByIdAndUpdate({ _id }, { text })
    console.log("res", todoCheckRes)

    res.send({
        status: 200,
        message: "update Api is working",
        // data: todoCheckRes
    })
}