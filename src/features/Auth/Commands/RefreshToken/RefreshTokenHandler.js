const jwt = require('jsonwebtoken');
const RefreshTokenRepository = require('../../../../repositories/RefreshToken/refreshToken.Repository');

class RefreshTokenHandler {
  async handle(command) {
    const { refreshToken } = command;

    // Verificar si el refreshToken es válido y está en la base de datos
    const storedToken = await RefreshTokenRepository.findByToken(refreshToken);
    if (!storedToken) {
      throw new Error('Refresh token inválido');
    }

    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const accessToken = jwt.sign(
      {
        userId: user.userId,
        tenantId: user.tenantId,
        role: user.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    return {
      accessToken,
      expiresIn: 15 * 60, // En segundos
    };
  }
}

module.exports = RefreshTokenHandler;
