const express = require('express');

// Importar routers específicos
const usersRouter = require('./users.router');
// const productsRouter = require('./products.router');

const router = express.Router();

// Registrar rutas específicas
router.use('/users', usersRouter); // Rutas de usuarios (e.g., /api/v1/users)
// router.use('/products', productsRouter); // Rutas de productos (e.g., /api/v1/products)

module.exports = router;
