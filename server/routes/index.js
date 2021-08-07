const router = require('express').Router()
const usersRoute = require('./usersRoute')
const reportsRoute = require('./reportsRoute')
const errorHandler = require('../middlewares/errorHandler')
const authentication = require('../middlewares/auth')

router.use('/', usersRoute)
router.use(authentication)

router.use('/reports', reportsRoute)

router.use(errorHandler)

module.exports = router