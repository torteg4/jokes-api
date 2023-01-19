const Joke = require('../models/joke.model');

// req is short for request
// res is short for response

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => res.json(allJokes) )
        .catch( err => res.json( { message: 'Something went wrong with find all jokes', error:err }));
}

module.exports.findOneJoke = (req,res) => {
    // console.log( req.params.id )
    Joke.findById( req.params.id )
        .then( oneJoke =>  res.json( oneJoke ) )
        .catch( err => res.json({ message: 'Something went wrong with find one joke', error:err }));
}

module.exports.createJoke = (req,res) => {
    // console.log(req.body)
    Joke.create(req.body)
        .then( createdJoke => res.json( createdJoke ) )
        .catch( err => res.json( { message: 'Something went wrong with create joke', error:err }));
}

module.exports.updateJoke = (req,res) => {
    Joke.findByIdAndUpdate( req.params.id , req.body, { new: true, runValidators: true } )
        .then( updatedJoke => res.json( updatedJoke ))
        .catch( err => res.json({ message: 'Something went wrong with update joke', error:err }));
}

module.exports.deleteJoke = (req,res) => {
    Joke.findByIdAndDelete( req.params.id )
        .then( result => res.json( result ))
        .catch( err => res.json({ message: 'Something went wrong with delete joke', error:err }));
}