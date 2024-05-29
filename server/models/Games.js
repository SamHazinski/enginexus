const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    gameID: {type: String, required: true},
    gameDescription: {type: String, required: true},
    imageUrl: {type: String, required: true},
    isFavorite: Boolean
});

const Game = model('game', gameSchema);

module.exports = Game;