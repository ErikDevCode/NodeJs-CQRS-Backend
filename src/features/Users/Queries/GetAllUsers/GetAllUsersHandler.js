const UserRepository = require('../../../../repositories/user/user.repository')

class GetAllUsersHandler {
  async handle() {

    const users = await UserRepository.findAll();
    return users;
  }
}

module.exports = GetAllUsersHandler;

