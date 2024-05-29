const mongoose = require('mongoose');
const {User, Game} = require('../models/index');
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

  const games = [
    { 
      game_id: 1, 
      moby_url: "http://www.mobygames.com/game/x-files-game", 
      title: "The X-Files Game",
      isFavorite: false,
    }, 
    {
      game_id: 2, 
      moby_url: "http://www.mobygames.com/game/who-framed-roger-rabbit", 
      title: "Who Framed Roger Rabbit",
      isFavorite: true,
    }, 
  ];

  for (const gameData of games) {
    const game = new Game(gameData);
    await game.save();
  }

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
