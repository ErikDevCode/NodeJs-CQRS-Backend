const Mediator = require('../mediator/Mediator');
const LoginCommand = require('../features/Auth/Commands/Login/LoginCommand');

class AuthController {
  async login(req, res, next) {
    try {
      const { routeOrEmail, password } = req.body;

      if (!routeOrEmail || !password) {
        return res.status(400).json({ message: 'Datos incompletos' });
      }

      // Enviar el comando al Mediator
      const command = new LoginCommand(routeOrEmail, password);
      const { token, user } = await Mediator.send(command);

      return res.status(200).json({
        message: 'Login exitoso',
        token,
        user: {
          appUserId: user.appUserId,
          routeOrEmail: user.routeOrEmail,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
