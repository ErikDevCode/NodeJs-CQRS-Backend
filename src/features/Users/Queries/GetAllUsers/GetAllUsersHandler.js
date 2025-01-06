const UserRepository = require('../../../../repositories/user/user.repository');
const UserDto = require('../../../../dtos/user/UserDto');

class GetAllUsersHandler {
  constructor() {
    this.userRepository = UserRepository;
  }

  async handle(query) {

    const users = await this.userRepository.findAll();
    return users;
  }
}

module.exports = GetAllUsersHandler;

