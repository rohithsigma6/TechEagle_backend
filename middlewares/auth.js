const jwt = require('jsonwebtoken')
module.exports.verifyUser = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const tokenDecrypted = jwt.verify(token, "SECRET_KEY")
        req.body.userId = tokenDecrypted
        next()
    } catch (err) {
        res.send({ success: false, message: err.message })
    }
}