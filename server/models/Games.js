const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  game_id: { type: String, required: true },
  moby_score: { type: Number, required: true },
  moby_url: { type: String, required: true },
  title: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
  createdAt: {type: Date, default: Date.now},
  thumbnail: {type: String, required: false}
});

const Game = model("game", gameSchema);

module.exports = Game;
