const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    // GET ALL JOKES
    app.get('/api/jokes', JokeController.findAllJokes);
    // CREATE NEW JOKE --POST
    app.post('/api/jokes', JokeController.createJoke);
    // // RETURN SINGLE JOKE WITH ID - GET
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    // // UPDATE SINGLE JOKE WITH ID -- PUT
    app.put('/api/jokes/:id', JokeController.updateJoke);
    // // DELETE SINGLE JOKE WITH ID -- DELETE
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}