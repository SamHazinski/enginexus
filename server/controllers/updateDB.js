const connectDB = require("../config/connection");
const fetchData = require("./fetchDataController");
const { Game } = require('../models');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const updateMongoDB = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    const data = await fetchData();
    console.log('Fetched data:', data);

    if (Array.isArray(data)) {
      for (const item of data) {
        const product = new Game({
          game_id: item.game_id,
          moby_score: item.moby_score,
          moby_url: item.moby_url,
          title: item.title,
          thumbnail: item.sample_cover.thumbnail_image
        });
        await product.save(); 
        console.log('Product saved to MongoDB:', product);
        await delay(1000);
      }
    } else {
      console.error('Data is not an array');
    }
  } catch (error) {
    console.error('Error updating MongoDB:', error);
    process.exit(1);
  }
};

module.exports = updateMongoDB