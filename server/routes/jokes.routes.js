const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.allJokes);
    app.post("/api/jokes/new", JokeController.addJoke);
    app.get("/api/jokes/:id", JokeController.getOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}