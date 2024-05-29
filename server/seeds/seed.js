const mongoose = require('mongoose');
const {User} = require('../models/index');
const db = require('../config/connection');

const seedUsers = async () => {
  // await mongoose.connect('mongodb://localhost:27017/enginexusdb', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  const users = [
    { username: 'admin', email: 'admin@example.com', password: 'password123' },
    { username: 'user', email: 'user@example.com', password: 'password123' },
  ];

  for (const userData of users) {
    const user = new User(userData);
    await user.save();
  }

  mongoose.connection.close();
};

seedUsers().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
