const Game = require('../models/Games');
const Favorite = require('../models/SavedGames');

module.exports = {
    async newGame(req, res){
        const newGame = Game.create(req.body)
         res.status(200).json(newGame);
    }
}