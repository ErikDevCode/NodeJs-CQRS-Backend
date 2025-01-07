const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicia sesión y genera un token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeOrEmail:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/login', AuthController.login);

module.exports = router;
