'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jinglelist = sequelize.define('Jinglelist', {
    jingleId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  Jinglelist.associate = function(models) {
  
  };
  return Jinglelist;
};
