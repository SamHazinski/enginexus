const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.get('/api/randomGames', async (req, res) => {
  try {
    const response = await fetch('https://api.mobygames.com/v1/games/random?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6');
    const data = await response.json();

    console.log('Response Data:', data); // Log response data for debugging

    // Process the data
    const processedData = data.games.map(game => ({
      gameId: game, // Assuming the correct property name is 'id'
    }));

    console.log('Processed Data:', processedData); // Log processed data

    res.setHeader('Content-Type', 'application/json'); // Set Content-Type header to JSON
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
      }))

      res.setHeader('Content-Type', 'application/json'); // Set Content-Type header to JSON
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
