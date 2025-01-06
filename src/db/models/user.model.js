const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cediId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    zoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    route: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    documentNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    paternalSurName: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    maternalSurName: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    names: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true, // Para createdAt y updatedAt
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

module.exports = User;