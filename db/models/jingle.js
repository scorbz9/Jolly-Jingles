'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jingle = sequelize.define('Jingle', {
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    lyrics: DataTypes.STRING,
    avgRating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Jingle.associate = function(models) {
    // associations can be defined here
  };
  return Jingle;
};