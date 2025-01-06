const swaggerJSDoc = require('swagger-jsdoc');
const generateSchemas = require('./swaggerSchemas');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Backend API',
      version: '1.0.0',
      description: 'Documentación dinámica de la API',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor local',
      },
    ],
    ...generateSchemas(), // Incluir esquemas generados automáticamente
  },
  apis: ['./src/routes/*.js'], // Rutas con anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;