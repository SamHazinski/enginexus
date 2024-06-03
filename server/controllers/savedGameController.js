const Favorite = require('../models/SavedGames');

module.exports = {
    async createFavorite(req, res) {
        try {
            const favoriteGame = await Favorite.create(req.body); 
            res.status(200).json(favoriteGame);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
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

    },
    async deleteGame(req, res) {
        try {
            const id = req.params.id;
            const deletedGame = await Favorite.findByIdAndDelete(id);
            if (!deletedGame) {
                return res.status(404).json({ message: "No game with that id exists" })
            }
            res.status(200).json({ message: "Game deleted successfully" })
        } catch (error) {
            console.error('Error deleting game:', error);
            res.status(500).json({ error: "Internal Server Error" })
        }
    }
}