'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Lists', [
        {name: 'List 4', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {name: 'List 5', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {name: 'Demo\'s Jingles', userId: 3, createdAt: new Date(), updatedAt: new Date()}
    ], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Lists', null, {});
  }
};
