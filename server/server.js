const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const connectDB = require('./config/connection');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/api/randomGames', async (req, res) => {
  try {
    const response = await fetch('https://api.mobygames.com/v1/games/random?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6');
    const data = await response.json();

    const processedData = data.games.map(game => ({
      gameId: game,
    }));

    res.setHeader('Content-Type', 'application/json');
    res.json(processedData);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'Failed to fetch and process data' });
  }
});

app.get('/api/recentGames', async (req, res) => {
  try {
    const response = await fetch('https://api.mobygames.com/v1/games/recent?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6');
    const data = await response.json();

    const processedData = data.games.map(game => ({
      gameId: game,
    }));

    res.setHeader('Content-Type', 'application/json');
    res.json(processedData);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'Failed to fetch and process data' });
  }
});

app.post('/api/saveGame', async (req, res) => {
  try {
    const { gameId } = req.body;
    // Save the game favorite to the database
    res.status(200).json({ message: 'Game saved to favorites!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save game' });
  }
});

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});
