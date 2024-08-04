const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'a9bcdeed759bc693ba075512a98056983387662d53884e46585338d941a977a1ca0b259ef0baf4c729baa334bf7823fe416faaf230d94fe086327d194ab42d39');
      req.admin = await Admin.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
};
