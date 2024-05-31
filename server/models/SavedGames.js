const { Schema, model } = require('mongoose');

const savedGameSchema= new Schema({
    game_id: {type: String, required: true},
    moby_url: {type: String, required: true},
    title: {type: String, required: true},
    isFavorite: {type: Boolean, default: false}
});

const Favorite = model('saved', savedGameSchema);

module.exports = Favorite;