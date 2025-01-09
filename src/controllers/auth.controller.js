const Mediator = require('../mediator/Mediator');
const LoginCommand = require('../features/Auth/Commands/Login/LoginCommand');
const RefreshTokenCommand = require('../features/Auth/Commands/RefreshToken/RefreshTokenCommand');

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const clientIp = req.headers['x-forwarded-for'] || req.ip;
      if (!email || !password) {
        return res.status(400).json({ message: 'Datos incompletos' });
      }

      const command = new LoginCommand(email, password, clientIp);
      const result = await Mediator.send(command);

      return res.status(200).json({
        message: 'Login exitoso',
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ message: 'Refresh token requerido' });
      }

      const command = new RefreshTokenCommand(refreshToken);
      const result = await Mediator.send(command);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
