'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 115, listId: 93, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 126, listId: 93, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 110, listId: 94, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 110, listId: 94, createdAt: new Date(), updatedAt: new Date() },
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
