const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");
const connectDB = require("./config/connection");
const authRoutes = require("./routes/auth");
const fetchData = require('./controllers/fetchDataController');
// const {Game, Favorite} = require('./models');
const {createFavorite, allSaved} = require('./controllers/savedGameController');
const {newGame, allGames, cloneFavorite} = require('./controllers/gameController')
const { Game } = require('./models')
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

app.get("/api/randomGames", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.mobygames.com/v1/games/random?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10"
    );
    const data = await response.json();

    // Process the data and extract game IDs
    const processedData = data.games.map((game) => ({
      gameId: game, // Assuming game ID is accessed using 'id'
    }));

    // Make individual API calls for each game ID
    // const gamesData = await Promise.all(
    //     processedData.map(async (game) => {
    //         const gameResponse = await fetch(`https://api.mobygames.com/v1/games/${game.gameId}?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6`);
    //         return gameResponse.json();
    //     })
    // );
    const gamesData = [];
    for (const game of processedData) {
      await delay(1000);
      const gameResponse = await fetch(
        `https://api.mobygames.com/v1/games/${game.gameId}?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10`
      );
      gamesData.push(await gameResponse.json());
    }

    res.setHeader("Content-Type", "application/json");
    res.json(gamesData);
  } catch (error) {
    console.error("Error fetching and processing data:", error);
    res.status(500).json({ error: "Failed to fetch and process data" });
  }
});

app.get("/api/recentGames", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.mobygames.com/v1/games/recent?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10"
    );
    const data = await response.json();

    // Process the data and extract game IDs
    const processedData = data.games.map((game) => ({
      gameId: game, 
    }));
    const gamesData = [];
    for (const game of processedData) {
      await delay(1000);
      const gameResponse = await fetch(
        `https://api.mobygames.com/v1/games/${game.gameId}?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10`
      );
      gamesData.push(await gameResponse.json());
    }

    res.setHeader("Content-Type", "application/json");
    res.json(gamesData);
  } catch (error) {
    console.error("Error fetching and processing data:", error);
    res.status(500).json({ error: "Failed to fetch and process data" });
  }
});

// app.get('/api/game/:id', cloneFavorite);
app.get('/api/allGames', allGames);
app.get('/api/allSaved', allSaved);
app.post('/api/saveGame', createFavorite);
app.post('/api/newGame', newGame);

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    fetchData().then(data => {
      console.log(data)
      if (Array.isArray(data)) {
        data.forEach(item => {
          const product = new Game({
            game_id: item.game_id,
            moby_url: item.moby_url,
            title: item.title,
          });
          product.save().then(() => {
            console.log('Product saved to MongoDB');
          }).catch(error => {
            console.error('Error saving product:', error);
          });
        });
      }
    });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
