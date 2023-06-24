const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization)

    try {
        if (authorization) {
            if (authorization.indexOf("Bearer") === -1) {
                res.send({
                    status: 200,
                    message: "Allah hafiz hacker sahab"
                })
            }
            else {
                const token = authorization.slice(7)
                console.log("token", token)

                const JWT_SECRET_KEY = 'exms17'

                const decode = jwt.verify(token, JWT_SECRET_KEY)
                console.log(decode)

                next()
                // res.send({
                //     status: 200,
                //     message: "Inside verify token",
                //     decode
                // })
            }
        }
    }
    catch (e) {
        res.send({
            status: 500,
            message: e.message,
        })
    }
}

module.exports = verifyToken