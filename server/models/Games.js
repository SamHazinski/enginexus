const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    game_id: {type: String, required: true},
    moby_url: {type: String, required: true},
    title: {type: String, required: true},
    isFavorite: {type: Boolean, default: false}
});

const Game = model('game', gameSchema);

module.exports = Game;