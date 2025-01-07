const express = require('express');
const configureMediator = require('./src/mediator/MediatorConfig');
const routes = require('./src/routes');
const errorHandler = require('./src/middlewares/error.handler');
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger.config');
const authenticateToken = require('./src/middlewares/auth.middleware');

require('dotenv').config();

// Configurar el Mediator
configureMediator();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Registrar Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  if (req.path.startsWith('/api/v1/auth')) {
    return next(); // Excluir todos los endpoints bajo "/api/v1/auth"
  }
  return authenticateToken(req, res, next); // Aplicar autenticación a todo lo demás
});

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
