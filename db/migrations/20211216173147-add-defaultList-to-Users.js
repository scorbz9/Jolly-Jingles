'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'defaultList', {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(60)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'defaultList')
  }
};
