'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 2, listId: 5, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 2, listId: 5, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 1, listId: 6, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 1, listId: 6, createdAt: new Date(), updatedAt: new Date() },
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
