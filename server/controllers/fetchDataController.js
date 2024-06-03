const fetch = require("node-fetch");
require('dotenv').config();
const apiKey = process.env.API_KEY
function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MAX_RETRIES = 3;
const BASE_DELAY = 1000;

const fetchData = async () => {
  let retries = 0;
  let delayTime = BASE_DELAY;

  while (retries < MAX_RETRIES) {
    try {
      const response = await fetch(
        `https://api.mobygames.com/v1/games/random?api_key=${apiKey}&limit=10`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch random games: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log("Full Data:", data);
      const games = data.games;
      console.log("Games Array:", games);
      const gameIds = games.map((game) => game);
      console.log("Game IDs:", gameIds);

      const gamesData = [];
      for (const gameId of gameIds) {
        await delay(1000);
        const gameResponse = await fetch(
          `https://api.mobygames.com/v1/games/${gameId}?api_key=${apiKey}&limit=10`
        );
        if (!gameResponse.ok) {
          throw new Error(
            `Failed to fetch game with ID ${gameId}: ${gameResponse.status} ${gameResponse.statusText}`
          );
        }
        const gameData = await gameResponse.json();
        gamesData.push(gameData);
      }
      await delay(delayTime);
      delayTime *= 2;
      retries++;
      return gamesData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  throw new Error("Maximum number of retries exceeded");
};

module.exports = fetchData;
