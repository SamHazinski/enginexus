const Favorite = require('../models/SavedGames');

module.exports = {
    async createFavorite(req, res) {
        const favoriteGame = Favorite.create(req.body)
        res.status(200).json(favoriteGame);
    },
    async allSaved(req, res) {
        try {
            const allSaved = await Favorite.find({});
            if (!allSaved) {
                return res.status(400).json({ message: "No saved games found" });
            }
            res.status(200).json(allSaved);
        } catch (error) {
            res.status(500).json(error);
        }

    }
}