const express = require('express');

// Importar routers específicos
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');

const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

// Registrar rutas específicas
router.use('/auth', authRouter);
router.use(authenticateToken);
router.use('/users', usersRouter); // Rutas de usuarios (e.g., /api/v1/users)

router.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
  });

module.exports = router;
