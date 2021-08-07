const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    generatePassword: (password) => {
        return bcrypt.hashSync(password, 5)
    }, 
    checkPassword: (password, hash) => {
        return bcrypt.compareSync(password, hash)
    },
    generateToken: (payload) => {
        return jwt.sign(payload, process.env.JWT_KEY)
    },
    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_KEY)
    }
}