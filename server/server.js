const express = require("express");
const cors = require("cors");
const path = require("path");
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

app.get('/api/games/latest', async (req, res) => {
  try {
    const latestGames = await Game.find().sort({ createdAt: -1 }).limit(9);
    res.json(latestGames);
  } catch (error) {
    console.error('Error fetching latest games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.post('/api/games/refresh', async (req, res) => {
//   try {
//     const latestGames = await Game.find().sort({ createdAt: -1 }).limit(9);
//     res.json(latestGames);
//     res.status(200).json({ message: 'Data refreshed successfully' });
//   } catch (error) {
//     console.error('Error refreshing data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

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
            moby_score: item.moby_score,
            moby_url: item.moby_url,
            title: item.title,
            thumbnail: item.sample_cover.thumbnail_image
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
