const Joke = require('../models/joke.model');

// req is short for request
// res is short for response

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with all jokes', error:err })
        });
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with one joke', error:err })
        });
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then( createdJoke => {
            res.json({ joke: createdJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with create joke', error:err })
        });
}

module.exports.updateJoke = (req,res) => {
    Joke.findAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with update joke', error:err })
        });
}

module.exports.deleteJoke = (req,res) => {
    Joke.findAndDelete({ _id: req.params.id })
        .then( result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with delete joke', error:err })
        });
}