const router = require('express').Router()
const reportsController = require('../controllers/reportsController')

router.get('/', reportsController.findAllReports)
router.get('/expenses', reportsController.findExpensesCategory)

module.exports = router