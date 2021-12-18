'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 2, listId: 1, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 2, listId: 1, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 1, listId: 2, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 1, listId: 2, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 10, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 15, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 20, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 11, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 16, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 9, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 4, listId: 3, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 6, listId: 3, createdAt: new Date(), updatedAt: new Date() },

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
