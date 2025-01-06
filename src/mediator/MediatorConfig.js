const Mediator = require('./Mediator');

// Importar comandos/queries y sus handlers
const GetAllUsersQuery = require('../features/Users/Queries/GetAllUsers/GetAllUsersQuery');
const GetAllUsersHandler = require('../features/Users/Queries/GetAllUsers/GetAllUsersHandler');

// const GetUserByIdQuery = require('../queries/user/GetUserByIdQuery');
// const GetUserByIdHandler = require('../handlers/user/GetUserByIdHandler');

function configureMediator() {
  // Registrar handlers
  Mediator.register(GetAllUsersQuery.name, new GetAllUsersHandler());
  //Mediator.register(GetUserByIdQuery.name, new GetUserByIdHandler());
}

module.exports = configureMediator;

