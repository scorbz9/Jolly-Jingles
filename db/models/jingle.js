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
    Jingle.belongsToMany(models.List, {
      through: 'Jinglelists',
      otherKey: 'listId',
      foreignKey: 'jingleId'
    });

    Jingle.hasMany(models.Review, { foreignKey: 'jingleId'})
  };
  return Jingle;
};
