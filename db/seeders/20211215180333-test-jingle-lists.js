'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 7, listId: 8, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 8, listId: 8, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 9, listId: 9, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 10, listId: 9, createdAt: new Date(), updatedAt: new Date() },
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
