'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let reports = require('./db.json').reports
    reports.forEach(report => {
      report.createdAt = new Date(report.date)
      report.updatedAt = new Date(report.date)
      delete report.date
    });
    
    await queryInterface.bulkInsert('Reports', reports, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Reports', null, {});
  }
};

