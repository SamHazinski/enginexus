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
      { game_id: 3, moby_url: "http://www.mobygames.com/game/wing-commander", title: "Wing Commander", isFavorite: false },
      { game_id: 4, moby_url: "http://www.mobygames.com/game/sid-meiers-alpha-centauri", title: "Sid Meier's Alpha Centauri", isFavorite: true },
      { game_id: 135497, moby_url: "https://www.mobygames.com/game/135497/where-cards-fall/", title: "Where Cards Fall", isFavorite: false },
      {game_id: 12, moby_url: "https://www.mobygames.com/game/12/the-chessmaster-3000/", title: "The Chessmaster 3000"},
      {game_id: 13, moby_url: "https://www.mobygames.com/game/13/the-chessmaster-4000-turbo/",title: "The Chessmaster 4000 Turbo"},
      {
        game_id: 14,
        moby_url: "https://www.mobygames.com/game/14/chessmaster-5000/",
        title: "Chessmaster 5000"
        },
        {
          game_id: 15,
          moby_url: "https://www.mobygames.com/game/15/sid-meiers-civilization-ii/",
          title: "Sid Meier's Civilization II"
          },
          {
            game_id: 17,
            moby_url: "https://www.mobygames.com/game/17/sargon-v-world-class-chess/",
            title: "Sargon V: World Class Chess"
            },
            {
              game_id: 18,
              moby_url: "https://www.mobygames.com/game/18/digger/",
              title: "Digger"
              },
              {
                game_id: 19,
                moby_url: "https://www.mobygames.com/game/19/rollo-and-the-brush-brothers/",
                title: "Rollo and the Brush Brothers"
                },
                {
                game_id: 20,
                moby_url: "https://www.mobygames.com/game/20/styx/",
                title: "Styx"
                },
                {
                  game_id: 28,
                  moby_url: "https://www.mobygames.com/game/28/knights-of-the-sky/",
                  title: "Knights of the Sky"
                  },
                  {
                  game_id: 29,
                  moby_url: "https://www.mobygames.com/game/29/spitfire-ace/",
                  title: "Spitfire Ace"
                  },
                  {
                  game_id: 30,
                  moby_url: "https://www.mobygames.com/game/30/deadline/",
                  title: "Deadline"
                  },      
                  {
                    game_id: 77,
                    moby_url: "https://www.mobygames.com/game/77/karnov/",
                    title: "Karnov"
                    },
                    {
                    game_id: 78,
                    moby_url: "https://www.mobygames.com/game/78/prince-of-persia-2-the-shadow-the-flame/",
                    title: "Prince of Persia 2: The Shadow & The Flame"
                    },
                    {
                    game_id: 79,
                    moby_url: "https://www.mobygames.com/game/79/mine-shaft/",
                    title: "Mine Shaft"
                    },
                    {
                    game_id: 80,
                    moby_url: "https://www.mobygames.com/game/80/jumpman/",
                    title: "Jumpman"
                    },
                    {
                    game_id: 81,
                    moby_url: "https://www.mobygames.com/game/81/tv-and-cinema-101-trivia-from-talkies-to-trekkies/",
                    title: "TV and Cinema 101: Trivia from Talkies to Trekkies"
                    },
                    {
                    game_id: 82,
                    moby_url: "https://www.mobygames.com/game/82/bumble-plot/",
                    title: "Bumble Plot"
                    },
                    {
                    game_id: 83,
                    moby_url: "https://www.mobygames.com/game/83/adventures-in-math/",
                    title: "Adventures in Math"
                    },
                    {
                    game_id: 84,
                    moby_url: "https://www.mobygames.com/game/84/monster-math/",
                    title: "Monster Math"
                    },
                    {
                    game_id: 85,
                    moby_url: "https://www.mobygames.com/game/85/starflight-2-trade-routes-of-the-cloud-nebula/",
                    title: "Starflight 2: Trade Routes of the Cloud Nebula"
                    },
                    {
                    game_id: 86,
                    moby_url: "https://www.mobygames.com/game/86/the-crimson-crown/",
                    title: "The Crimson Crown"
                    },
                    {
                    game_id: 87,
                    moby_url: "https://www.mobygames.com/game/87/cutthroats/",
                    title: "Cutthroats"
                    },
                    {
                    game_id: 88,
                    moby_url: "https://www.mobygames.com/game/88/the-hitchhikers-guide-to-the-galaxy/",
                    title: "The Hitchhiker's Guide to the Galaxy"
                    },
                    {
                    game_id: 89,
                    moby_url: "https://www.mobygames.com/game/89/dr-dumonts-wild-parti/",
                    title: "Dr. Dumont's Wild P.A.R.T.I."
                    },
                    {
                    game_id: 90,
                    moby_url: "https://www.mobygames.com/game/90/tass-times-in-tonetown/",
                    title: "Tass Times in Tonetown"
                    },
                    {
                    game_id: 91,
                    moby_url: "https://www.mobygames.com/game/91/transylvania/",
                    title: "Transylvania"
                    },
                    {
                    game_id: 92,
                    moby_url: "https://www.mobygames.com/game/92/altered-destiny/",
                    title: "Altered Destiny"
                    },
                    {
                    game_id: 93,
                    moby_url: "https://www.mobygames.com/game/93/suspect/",
                    title: "Suspect"
                    },
                    {
                    game_id: 94,
                    moby_url: "https://www.mobygames.com/game/94/a-mind-forever-voyaging/",
                    title: "A Mind Forever Voyaging"
                    },
                    {
                    game_id: 95,
                    moby_url: "https://www.mobygames.com/game/95/wishbringer/",
                    title: "Wishbringer"
                    },
                    {
                    game_id: 96,
                    moby_url: "https://www.mobygames.com/game/96/quarantine/",
                    title: "Quarantine"
                    },
                    {
                    game_id: 97,
                    moby_url: "https://www.mobygames.com/game/97/wonderland/",
                    title: "Wonderland"
                    },
                    {
                    game_id: 98,
                    moby_url: "https://www.mobygames.com/game/98/rise-of-the-dragon/",
                    title: "Rise of the Dragon"
                    },
                    {
                    game_id: 99,
                    moby_url: "https://www.mobygames.com/game/99/big-red-racing/",
                    title: "Big Red Racing"
                    },
                    {
                    game_id: 100,
                    moby_url: "https://www.mobygames.com/game/100/touchdown-football/",
                    title: "Touchdown Football"
                    },
                    {
                    game_id: 101,
                    moby_url: "https://www.mobygames.com/game/101/armor-alley/",
                    title: "Armor Alley"
                    },
                    {
                    game_id: 102,
                    moby_url: "https://www.mobygames.com/game/102/robotron-2084/",
                    title: "Robotron: 2084"
                    },
                    {
                    game_id: 103,
                    moby_url: "https://www.mobygames.com/game/103/wibarm/",
                    title: "Wibarm"
                    },
                    {
                    game_id: 104,
                    moby_url: "https://www.mobygames.com/game/104/ultima-vi-the-false-prophet/",
                    title: "Ultima VI: The False Prophet"
                    },
                    {
                    game_id: 105,
                    moby_url: "https://www.mobygames.com/game/105/mechwarrior/",
                    title: "MechWarrior"
                    },
                    {
                    game_id: 106,
                    moby_url: "https://www.mobygames.com/game/106/mechwarrior-2-31st-century-combat/",
                    title: "MechWarrior 2: 31st Century Combat"
                    },
                    {
                    game_id: 107,
                    moby_url: "https://www.mobygames.com/game/107/test-drive/",
                    title: "Test Drive"
                    },
                    {
                    game_id: 108,
                    moby_url: "https://www.mobygames.com/game/108/chuck-yeagers-air-combat/",
                    title: "Chuck Yeager's Air Combat"
                    },
                    {
                    game_id: 109,
                    moby_url: "https://www.mobygames.com/game/109/life-death/",
                    title: "Life & Death"
                    },
                    {
                    game_id: 110,
                    moby_url: "https://www.mobygames.com/game/110/dark-castle/",
                    title: "Dark Castle"
                    }     
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
