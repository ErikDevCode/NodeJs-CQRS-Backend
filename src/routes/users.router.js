const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserDto'
 */

router.get('/', UserController.getAllUsers);

module.exports = router;
