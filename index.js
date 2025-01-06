const express = require('express');
const configureMediator = require('./src/mediator/MediatorConfig');
const routes = require('./src/routes');
const errorHandler = require('./src/middlewares/error.handler');
const sequelize = require('./config/database'); // Conexión a la base de datos
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger.config');
require('dotenv').config();

// Configurar el Mediator
configureMediator();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Registrar Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Registrar rutas principales
app.use('/api/v1', routes);

// Middleware de manejo de errores
app.use(errorHandler);

// Probar conexión a la base de datos
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos exitosa.');

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
}

startServer();
