const express = require("express");
const app = express();
const port = 8000;

// You want config to happen first bc it will call config first.
require("./config/mongoose.config");
// require('/routes/joke.routes')(app);
app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokeRoutes = require("./routes/joke.routes");
AllJokeRoutes(app);


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );