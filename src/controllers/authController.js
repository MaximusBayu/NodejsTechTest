const { createUser, findUserByUsername } = require('../models/User');
const { generateToken } = require('../utils/jwt');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user) return res.status(400).json({ error: 'User not found' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Incorrect password' });

  const token = generateToken(user);
  res.json({ token });
};

module.exports = { register, login };