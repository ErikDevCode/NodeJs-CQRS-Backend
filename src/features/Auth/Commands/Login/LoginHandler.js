const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('../../../../repositories/user/user.repository');
const RefreshTokenRepository = require('../../../../repositories/RefreshToken/refreshToken.Repository');


class LoginHandler {
  async handle(command) {
    const { email, password, clientIp } = command;

   // 1. Buscar el usuario por email
   const user = await UserRepository.findByEmailWithPassword(email);

   if (!user) {
     throw new Error('Usuario no encontrado');
   }

    // 2. Validar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password.passwordHash);
    if (!isPasswordValid) {
      throw new Error('Credenciales inválidas');
    }

    // 3. Definir tiempos de expiración
    const accessTokenExpirationTime = 15 * 60; // 15 minutos en segundos
    const refreshTokenExpirationTime = 30 * 24 * 60 * 60; // 30 días en segundos

    // 4. Generar tokens
    const accessToken = jwt.sign(
      {
        userId: user.userId,
        tenantId: user.tenantId,
        email: user.email,
        role: user.roleId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: accessTokenExpirationTime }
    );

    const refreshToken = jwt.sign(
      { userId: user.userId },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: refreshTokenExpirationTime }
    );

    // 5. Guardar el refresh token en la base de datos
    await RefreshTokenRepository.create({
      tokenId: require('uuid').v4(),
      userId: user.userId,
      token: refreshToken,
      expiration: new Date(Date.now() + refreshTokenExpirationTime),
    });

    // 6. Devolver los tokens y el usuario
    return {
      accessToken,
      expiresIn: accessTokenExpirationTime,
      refreshToken,
      user: {
        userId: user.userId,
        email: user.email,
        tenantId: user.tenantId,
        role: user.roleId,
      },
    };
  }
}

module.exports = LoginHandler;
