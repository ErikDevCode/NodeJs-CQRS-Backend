const Mediator = require('./Mediator');

// Importar comandos/queries y sus handlers
const GetAllUsersQuery = require('../features/Users/Queries/GetAllUsers/GetAllUsersQuery');
const GetAllUsersHandler = require('../features/Users/Queries/GetAllUsers/GetAllUsersHandler');

const LoginCommand = require('../features/Auth/Commands/Login/LoginCommand');
const LoginHandler = require('../features/Auth/Commands/Login/LoginHandler');

function configureMediator() {
  // Registrar handlers
  Mediator.register(GetAllUsersQuery.name, new GetAllUsersHandler());
  Mediator.register(LoginCommand.name, new LoginHandler());
}

module.exports = configureMediator;

