'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.changeColumn('Jingles', 'avgRating',  { 
      type: Sequelize.NUMERIC(2,1),
      allowNull: true,
      defaultValue: null,
      });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   await queryInterface.changeColumn('Jingles', 'avgRating', {
        type: Sequelize.NUMERIC(2,1),
        allowNull: false
   }); 
  }
};
