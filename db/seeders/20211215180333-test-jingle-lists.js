'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Jinglelists', [
        { jingleId: 62, listId: 11, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 62, listId: 12, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 63, listId: 11, createdAt: new Date(), updatedAt: new Date() },
        { jingleId: 63, listId: 12, createdAt: new Date(), updatedAt: new Date() },
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
