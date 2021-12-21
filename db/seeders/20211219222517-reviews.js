'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Reviews', [

     {
       rating: 5,
       message: "I love the Michael Buble Christmas songs. This song makes my heart warm.",
       jingleId: 1,
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        rating: 4,
        message: "Very enjoyable holiday music. This reminds me of Frank Sinatra or Bing Crosby.",
        jingleId: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 4,
        message: "This is a great song for NYE or for 4th of July. Such an inspirational song, and it's fun to sing and dance to.",
        jingleId: 11,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 3,
        message: "I don't immediately think of this song as a holiday hit, but it's great for New Year's Eve.",
        jingleId: 11,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 4,
        message: "Summer love, young love. This song takes me back! This song came on at a Valentine's Day party, and it was a hit!",
        jingleId: 16,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 3,
        message: "Is this on my 4th of July playlist? Sure. Do I love it? I mean, I don't want to say Yes.",
        jingleId: 20,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 3,
        message: "Sure, it's fun. My views on Adam Sandler are mixed. Is he funny, or just annoying?",
        jingleId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        rating: 5,
        message: "What a great all-around jolly song. This can be played during any celebration. Love!",
        jingleId: 12,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
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
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
