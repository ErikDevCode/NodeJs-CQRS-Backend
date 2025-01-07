const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppUser = require('../../../../db/models/appUser.model');

class LoginHandler {
  async handle(command) {
    const { routeOrEmail, password } = command;

    // Buscar el usuario en la base de datos
    const user = await AppUser.findOne({ where: { routeOrEmail } });
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar el password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      throw new Error('Credenciales inválidas');
    }

    // Generar el token JWT
    const token = jwt.sign(
      { appUserId: user.appUserId, routeOrEmail: user.routeOrEmail },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    return { token, user };
  }
}

module.exports = LoginHandler;
