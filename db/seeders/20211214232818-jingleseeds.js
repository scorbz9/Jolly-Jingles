'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Jingles', [
    { name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", lyrics: 'song lyrics', avgRating: 4.5, description: 'A Christmas Classic by Michael Bublé', image: 'https://images.genius.com/508d57cabceffef36333a9adda61280b.300x300x1.jpg', createdAt: new Date(), updatedAt: new Date()},
    { name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", lyrics: 'song lyrics', avgRating: 4.5, description: 'A Christmas Classic by Michael Bublé', image: 'https://images.genius.com/508d57cabceffef36333a9adda61280b.300x300x1.jpg', createdAt: new Date(), updatedAt: new Date()},
    { name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", lyrics: 'song lyrics', avgRating: 4.5, description: 'A Christmas Classic by Michael Bublé', image: 'https://images.genius.com/508d57cabceffef36333a9adda61280b.300x300x1.jpg', createdAt: new Date(), updatedAt: new Date()},
    { name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", lyrics: 'song lyrics', avgRating: 4.5, description: 'A Christmas Classic by Michael Bublé', image: 'https://images.genius.com/508d57cabceffef36333a9adda61280b.300x300x1.jpg', createdAt: new Date(), updatedAt: new Date()},
    { name: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", lyrics: 'song lyrics', avgRating: 4.5, description: 'A Christmas Classic by Michael Bublé', image: 'https://images.genius.com/508d57cabceffef36333a9adda61280b.300x300x1.jpg', createdAt: new Date(), updatedAt: new Date()}

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Jingles', null, {});
  }
};
