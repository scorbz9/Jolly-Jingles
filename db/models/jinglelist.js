'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jinglelist = sequelize.define('Jinglelist', {
    jingleId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  Jinglelist.associate = function(models) {

    Jinglelist.belongsTo(models.Jingle, {
      foreignKey: 'jingleId'
    })

    Jinglelist.belongsTo(models.List, {
      foreignKey: 'listId'
    })
  };
  return Jinglelist;
};
