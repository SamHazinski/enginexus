const Favorite = require('../models/SavedGames');

module.exports = {
    async createFavorite(req, res) {
       const favoriteGame = Favorite.create(req.body)
       res.status(200).json(favoriteGame);
        // const { game_id, moby_url, title } = req.body;
        // try {
        //     // favGame = new Favorite({ game_id, moby_url, title });
        //     res.status(200).json(favGame);
        // } catch (error) {
        //     res.status(500).json(error);
        // }
        
    }
}