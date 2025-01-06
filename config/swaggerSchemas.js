const UserDto = require('../src/dtos/user/UserDto');

function generateSchemas() {
  return {
    components: {
      schemas: {
        UserDto: UserDto.getSchema(), // Llamada a la función estática getSchema
      },
    },
  };
}

module.exports = generateSchemas;
