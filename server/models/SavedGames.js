const { Schema, model } = require("mongoose");

const savedGameSchema = new Schema({
  game_id: { type: String, required: true },
  moby_score: { type: String, required: true },
  moby_url: { type: String, required: false },
  title: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  thumbnail: { type: String, required: false },
});

const Favorite = model("saved", savedGameSchema);

module.exports = Favorite;
