const userCheck = require("../schema/userSchema")
const bycrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports.signupUser = async (req, res) => {
    const { name, email, password } = req.body
    console.log("req body", req.body)

    try {
        const salt = await bycrypt.genSalt(10)
        console.log("salt", salt)

        const hashedPassword = await bycrypt.hash(password, salt)
        console.log("hashedPassword", hashedPassword)

        const userCheckres = await userCheck({ email, name, password: hashedPassword })
        const saveRes = await userCheckres.save()
        console.log("saveRes", saveRes)

        // console.log("hashedPassword", hashedPassword)


        res.send({
            status: 200,
            message: "signupUser Api is working",
            saveRes: saveRes,
            userCheckres: userCheckres
        })
    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log("req body", req.body)

    try {
        const databaseUser = await userCheck.find({ email: email })

        if (databaseUser.length > 0) {
            const hashedPassword = databaseUser[0].password

            const compareRes = await bycrypt.compare(password, hashedPassword)

            if (compareRes) {

                const JWT_SECRET_KEY = 'exms17'

                //GENERATE TOKEN
                const token = await jwt.sign({ email }, JWT_SECRET_KEY)

                res.send({
                    status: 200,
                    message: "User password matched",
                    compareRes,
                    token
                })
            }
            else {
                res.send({
                    status: 200,
                    message: "Incorrect password",
                    compareRes
                })
            }
        }
        else {
            res.send({
                status: 200,
                message: "Incorrect email"
            })
        }

    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}

module.exports.getUserData = async (req, res) => {
    const { email } = req.body
    console.log("req body", req.body)

    try {
        const databaseUser = await userCheck.find({ email: email })

        if (databaseUser.length > 0) {
            res.send({
                status: 200,
                message: "User found",
                databaseUser
            })
        }

    }
    catch (e) {
        console.log(e.message)
        res.send({
            status: 500,
            message: e.message,
        })
    }
}