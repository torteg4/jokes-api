const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    { joke: {
        type: String,
        required:true,
        minLength:[3, "Joke must be at least 3 characters long"]
    }},
    {timestamps:true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
