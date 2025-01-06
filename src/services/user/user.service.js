const UserRepository = require('../../repositories/user/user.repository');

class UserService {
  async getAllUsers() {
    return await UserRepository.findAll();
  }

  async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  async getUserByEmail(email) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error('User not found');
    return user;
  }

  async createUser(userData) {
    return await UserRepository.create(userData);
  }

  async updateUser(id, userData) {
    const updatedUser = await UserRepository.update(id, userData);
    if (!updatedUser) throw new Error('User not found');
    return updatedUser;
  }

  async deleteUser(id) {
    const result = await UserRepository.delete(id);
    if (!result) throw new Error('User not found');
    return result;
  }
}

module.exports = new UserService();

