const fetch = require('node-fetch');

function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MAX_RETRIES = 3;
const BASE_DELAY = 1000; // Initial delay in milliseconds

const fetchData = async () => {
  let retries = 0;
  let delayTime = BASE_DELAY;

  while (retries < MAX_RETRIES) {
  try {
    const response = await fetch('https://api.mobygames.com/v1/games/random?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10');
    if (!response.ok) {
      throw new Error(`Failed to fetch random games: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Full Data:", data); // Log the full data structure
    const games = data.games; // Access the 'games' array
    console.log("Games Array:", games); // Log the 'games' array
    const gameIds = games.map((game) => game);
    console.log("Game IDs:", gameIds); // Log the extracted game IDs
    // Extract game IDs from data
   
    
    const gamesData = [];
    for (const gameId of gameIds) {
      await delay(1000);
      const gameResponse = await fetch(
        `https://api.mobygames.com/v1/games/${gameId}?api_key=moby_EE6yuHjZex3HiMBaAFqkKl0dyH6&limit=10`
      );
      if (!gameResponse.ok) {
        throw new Error(`Failed to fetch game with ID ${gameId}: ${gameResponse.status} ${gameResponse.statusText}`);
      }
      const gameData = await gameResponse.json();
      gamesData.push(gameData);
    }
    await delay(delayTime);
  delayTime *= 2; // Exponential backoff
  retries++;
    return gamesData; // Return the fetched and processed data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to indicate failure
  }
  
};
throw new Error('Maximum number of retries exceeded');
}

module.exports = fetchData;