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
 *               email:
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


/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refrescar token JWT
 *     tags: [Auth]
 *     description: Endpoint para obtener un nuevo accessToken utilizando el refreshToken.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *             required:
 *               - refreshToken
 *     responses:
 *       200:
 *         description: Token renovado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Nuevo token de acceso generado
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 expiresIn:
 *                   type: integer
 *                   description: Tiempo de expiración del accessToken en segundos
 *                   example: 900
 */

router.post('/refresh-token', AuthController.refreshToken);

module.exports = router;
