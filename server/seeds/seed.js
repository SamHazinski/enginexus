const mongoose = require('mongoose');
const { User, Game, Favorite } = require('../models');
const connectDB = require('../config/connection');

const seedUsers = async () => {
  try {
    // Ensure the database is connected
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Game.deleteMany({});

    // Your seeding logic here
    const users = [
      { username: 'admin', email: 'admin@example.com', password: 'password123' },
      { username: 'user', email: 'user@example.com', password: 'password123' },
    ];

    const games = [
      { game_id: 1, moby_url: "http://www.mobygames.com/game/x-files-game", title: "The X-Files Game", isFavorite: false },
      { game_id: 2, moby_url: "http://www.mobygames.com/game/who-framed-roger-rabbit", title: "Who Framed Roger Rabbit", isFavorite: true },
    ];

    const saved = [
      { game_id: 3, moby_url: "http://www.mobygames.com/game/wing-commander", title: "Wing Commander", isFavorite: false },
      { game_id: 4, moby_url: "http://www.mobygames.com/game/sid-meiers-alpha-centauri", title: "Sid Meier's Alpha Centauri", isFavorite: true },
    ]

    for (const gameData of games) {
      const game = new Game(gameData);
      await game.save();
    }

    for (const userData of users) {
      const user = new User(userData);
      await user.save();
    }

    for (const favData of saved) {
      const fav = new Favorite(favData);
      await fav.save();
    }

    console.log('Seeding completed.');

    // Close the database connection
    await mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

seedUsers().catch(err => {
  console.error(err);
});
