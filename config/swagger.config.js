const swaggerJSDoc = require('swagger-jsdoc');
const generateSchemas = require('./swaggerSchemas');

const schemas = generateSchemas();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js CQRS Backend API',
      version: '1.0.0',
      description: 'Documentación dinámica de la API',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor local',
      },
    ],
    components: {
      ...schemas.components, // Incluir esquemas generados automáticamente
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Rutas con anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;