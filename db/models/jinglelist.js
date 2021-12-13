'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jinglelist = sequelize.define('Jinglelist', {
    jingleId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  Jinglelist.associate = function(models) {
    // associations can be defined here
  };
  return Jinglelist;
};