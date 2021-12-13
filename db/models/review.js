'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    message: DataTypes.STRING,
    jingleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Jingle, { foreignKey: 'jingleId'});
    Review.belongsTo(models.User, { foreignKey: 'userId'});
    // associations can be defined here
  };
  return Review;
};