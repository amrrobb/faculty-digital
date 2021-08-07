'use strict';

const {generatePassword} = require('../helpers')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = require('./db.json').users
    users.forEach(user => {
      user.password = generatePassword(user.password)
      user.createdAt = new Date()
      user.updatedAt = new Date()
    });
    
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
