'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 95, listId: 13, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 96, listId: 13, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 108, listId: 14, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 109, listId: 14, createdAt: new Date(), updatedAt: new Date() },
    ], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Jinglelists', null, {});
  }
};
