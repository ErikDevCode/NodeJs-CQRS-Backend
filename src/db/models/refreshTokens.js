module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define(
      'RefreshToken',
      {
        tokenId: {
          type: DataTypes.UUID, // Usamos UUID para reflejar CHAR(36)
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4, // Generar automáticamente UUIDs
        },
        userId: {
          type: DataTypes.UUID, // Refleja CHAR(36)
          allowNull: false,
        },
        token: {
          type: DataTypes.STRING(512), // Refleja VARCHAR(512)
          allowNull: false,
        },
        expiration: {
          type: DataTypes.DATE, // Refleja DATETIME
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE, // Sequelize manejará `createdAt` automáticamente
          defaultValue: DataTypes.NOW,
        },
        revokedAt: {
          type: DataTypes.DATE, // Fecha opcional
          allowNull: true,
        },
        replacedByToken: {
          type: DataTypes.STRING(512), // Refleja VARCHAR(512)
          allowNull: true,
        },
      },
      {
        tableName: 'RefreshTokens', // Nombre de la tabla en la base de datos
        timestamps: false, // Desactivamos `createdAt` y `updatedAt` automáticos porque ya están definidos en la tabla
      }
    );
  
    // Asociación con User
    RefreshToken.associate = (models) => {
      RefreshToken.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user', // Alias para acceder al usuario relacionado
      });
    };
  
    return RefreshToken;
  };
  