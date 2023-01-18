const express = require("express");
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokeRoutes = require('./routes/jokes.routes');
AllJokeRoutes(app);

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );