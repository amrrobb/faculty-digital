const {User} = require('../models')
const {generateToken, checkPassword} = require('../helpers')

class Controller {
    static async register (req, res, next){
        try {
            let {email, password} = req.body
            let input = {email, password}
    
            const data = await User.create(input)
            res.status(201).json({
                id: data.id,
                email: data.email
            })
             
        }
        catch (err) {
            if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
                next({code: 400, sequelize: err.errors, name: err.name})
            } 
            else {
                next({code: 500, message: err.message})
            }
        }
    }
    
    static async login (req, res, next){
        try {
            const {email, password} = req.body

            const data = await User.findOne({where: {email}})
            let compared = data ? checkPassword(password, data.password) : null
            if (compared){                   
                const access_token = generateToken({
                    id: data.id,
                    email: data.email
                })
                res.status(200).json({access_token, email})
            }
            else {
                next({code: 401, message: "Invalid Email/Password"})
            }

        } catch (err) {
            next({code: 500, message: err.message})
        }
    }
}

module.exports = Controller