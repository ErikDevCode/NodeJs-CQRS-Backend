const db = require('../../db/models');

class RefreshTokenRepository {
  async create(tokenData) {
    return await db.RefreshToken.create(tokenData);
  }

  async findByToken(token) {
    return await db.RefreshToken.findOne({ where: { token } });
  }
}

module.exports = new RefreshTokenRepository();
