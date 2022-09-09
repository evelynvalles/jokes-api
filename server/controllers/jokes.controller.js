const Joke = require("./../models/jokes.models")

// all jokes
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({allJokes}))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// create
module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// get one
module.exports.getOneJoke = (req, res) => {
    const paramsId = req.params.id;
    Joke.findOne({ _id: paramsId })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// update
module.exports.updateJoke = (req, res) => {
    const paramsId = req.params.id;
    const updatedJoke = req.body;
    Joke.findOneAndUpdate(
        {_id: paramsId},
        updatedJoke,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteJoke = (req, res) => {
    const paramsId = req.params.id;
    Joke.findOneAndDelete({_id: paramsId})
    .then(deletedJoke => res.json(deletedJoke))
    .catch(err => res.json(err))
}