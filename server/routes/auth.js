const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if(!username||!email|| !password){
      return res.status(400).json({msg:'Please enter all the fields'});
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ username, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'yourJWTSecret', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ status:'success', message: 'Registration successful', token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    if(!username|| !password){
      return res.status(400).json({msg:'Please enter all the fields'});
    }
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'yourJWTSecret', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ status:'success', message: 'Login successful', token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
