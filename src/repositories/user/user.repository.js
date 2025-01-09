const db = require('../../db/models');

class UserRepository {
  async findByEmailWithPassword(email) {
    return await db.User.findOne({
      where: { email },
      include: [{ model: db.UserPassword, as: 'password' }], // Incluye la relación con UserPassword
    });
  };

  async findAll() {
    return await db.User.findAll(); // Consulta todos los usuarios
  };
};

module.exports = new UserRepository();

