'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {
          name: 'Jolly Jingles',
          email: 'test@testing.com',
          hashedPassword: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
          defaultList: 'Jolly Jingles\'s Jingles'
        },
        {
          name: 'Jolly Jingles2',
          email: 'test2@testing.com',
          hashedPassword: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
          defaultList: 'Jolly Jingles2\'s Jingles'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});

  }
};
