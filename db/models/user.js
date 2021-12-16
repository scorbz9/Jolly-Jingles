'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    defaultList: {
      type: DataTypes.INTEGER,
      unique: true,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.List, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Review, { foreignKey: 'userId'});
  };
  return User;
};
