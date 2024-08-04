const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, 'a9bcdeed759bc693ba075512a98056983387662d53884e46585338d941a977a1ca0b259ef0baf4c729baa334bf7823fe416faaf230d94fe086327d194ab42d39', {
      expiresIn: '1d',
    });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
