const fetchData = require('./fetchDataController')
const updateDB = require('./updateDB.js')

const refreshDB = async () => {
    try {
      const newData = await fetchData
      await updateDB(newData);
      return newData;
    } catch (error) {
      console.error('Error fetching and updating data:', error);
      throw error;
    }
  };

  module.exports = refreshDB