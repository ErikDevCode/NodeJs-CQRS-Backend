const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isGlobal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'users',
      timestamps: true,
    }
  );

   // Definir las asociaciones
   User.associate = (models) => {
    User.hasOne(models.UserPassword, {
      foreignKey: 'userId',
      as: 'password',
    });
  };

  return User;
};