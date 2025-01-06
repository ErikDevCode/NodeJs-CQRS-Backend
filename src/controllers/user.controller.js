const Mediator = require('../mediator/Mediator');
const GetAllUsersQuery = require('../../src/features/Users/Queries/GetAllUsers/GetAllUsersQuery');

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const query = new GetAllUsersQuery();
      const users = await Mediator.send(query);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
