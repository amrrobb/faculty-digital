const {Report, sequelize} = require('../models')

class Controller {
    static async findAllReports (req, res, next) {
        try {
            const dataSales = await Controller.findSalesReports(req, res, next)
            const dataExpenses = await Controller.findExpensesReports(req, res, next)

            res.status(200).json({dataSales, dataExpenses})

        }
        catch(err) {
            next({code: 500, message: err.message})
        }
    }

    static async findSalesReports (req, res, next) {
        try {
            const data = await Report.findAll({
                where: {type: "sales"},
                attributes: [
                    [sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt')), 'month'], 
                    [sequelize.fn('SUM', sequelize.col('amount')), 'totalSales']
                ],
                group: [sequelize.fn('date_trunc', 'month', sequelize.col('createdAt'))]
            })
            return data
            
        }
        catch(err) {
            next({code: 500, message: err.message})
        }
    }
    
    static async findExpensesReports (req, res, next) {
        try {
            const data = await Report.findAll({
                where: {type: "expenses"},
                attributes: [
                    [sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt')), 'month'], 
                    [sequelize.fn('SUM', sequelize.col('amount')), 'totalExpenses']
                ],
                group: [sequelize.fn('date_trunc', 'month', sequelize.col('createdAt'))]
            })
            
            return data

        }
        catch(err) {
            next({code: 500, message: err.message})
        }
    }

    static async findExpensesCategory(req, res, next) {
        try {
            const data = await Report.findAll({
                where: {type: "expenses"},
                attributes: [
                    'category', 
                    [sequelize.fn('SUM', sequelize.col('amount')), 'totalExpenses']
                ],
                group: 'category'
            })
            
            res.status(200).json(data)

        }
        catch(err) {
            next({code: 500, message: err.message})
        }
    }
}

module.exports = Controller