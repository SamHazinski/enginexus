const Game = require('../models/Games');
const Favorite = require('../models/SavedGames');

module.exports = {
    async newGame(req, res){
        const newGame = Game.create(req.body)
         res.status(200).json(newGame);
    },
    async allGames(req, res){
        try {
            const allGames = await Game.find({});
            if (!allGames){
              return res.status(400).json({message: "No games found"});
            }
            res.status(200).json(allGames);
          } catch (error) {
            res.status(500).json(error);
          }
    },
   async cloneFavorite(req, res){
    const fav = await Game.findOne({_id: params.id});
    const newFav = Favorite.create({fav});
    res.status(200).json(newFav);
   },
   
}