const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Adjuntar datos decodificados al request
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token no válido' });
  }
}

module.exports = authenticateToken;
