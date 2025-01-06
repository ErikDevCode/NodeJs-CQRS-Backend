const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../../config/database'); // Importa tu conexión configurada

const db = {};

// Leer todos los archivos en la carpeta `models` (excepto este archivo)
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Añade el modelo a la colección `db`
  });

// Asociar modelos si es necesario
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exportar Sequelize y los modelos
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

