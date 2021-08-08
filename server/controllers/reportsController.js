const {Report, sequelize} = require('../models')

class Controller {   
    static async findAllReports (req, res, next) {
        try {
            const data = await Report.findAll({
                attributes: [
                    [sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt')), 'month'], 
                    [sequelize.fn('SUM', sequelize.literal("CASE WHEN type = 'sales' THEN amount ELSE 0 END")), 'totalSales'],
                    [sequelize.fn('SUM', sequelize.literal("CASE WHEN type = 'expenses' THEN amount ELSE 0 END")), 'totalExpenses'],
                ],
                group: [sequelize.fn('date_trunc', 'month', sequelize.col('createdAt'))],
                order: [[sequelize.fn('date_trunc', 'month', sequelize.col('createdAt')), 'DESC']]
            })
            res.json(data)
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