const { verifyToken } = require('../helpers') 
const {User} = require('../models')

async function authentication(req, res, next) {
    try {
        const access_token = req.headers.access_token || null
        const payload = verifyToken(access_token)
    
        const data = await User.findByPk(payload.id)
        if (data) {
            req.user = {
                id: data.id,
                email: data.email,
            }
            next()
        }
        else {
            next({code: 401, message: "Invalid access token"})
        }

    }
    catch (err) {
        if (err.name === "JsonWebTokenError") {
            next({code: 401, message: "User must login with specified account"})
        }
        else {
            next({code: 500, message: err.message})
        }

    }

}

module.exports = authentication