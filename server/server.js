const express = require("express");
const path = require("path");
const db = require("./config/connection");

// Comment out this code once you have built out queries and mutations in the client folder
//const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post('/api/saveGame', async (req, res) => {
  const { gameId } = req.body;
  // Save the game data to the MongoDB database using Mongoose
  res.json({ message: 'Game saved successfully' });
});

// Comment out this code once you have built out queries and mutations in the client folder
//app.use(routes);

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}
// Comment out this code once you have built out queries and mutations in the client folder
db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
