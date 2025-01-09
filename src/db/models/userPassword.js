const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

module.exports = (sequelize, DataTypes) => {
    const UserPassword = sequelize.define(
      'UserPassword',
      {
        passwordId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        passwordHash: {
          type: DataTypes.STRING(255),
          allowNull: false,
        }
      },
      {
        tableName: 'userpasswords',
        timestamps: true,
      }
    );
  
    // Definir las asociaciones
    UserPassword.associate = (models) => {
      UserPassword.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };
  
    return UserPassword;
  };
  