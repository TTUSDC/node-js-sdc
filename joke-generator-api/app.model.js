const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
  joke: { type: String, required: true },
  timeCreated: { type: Date, required: true }
})

// Moved the Hashing to the controller
const JokeModel = module.exports = mongoose.model('Jokes', jokeSchema);

JokeModel.createOneJoke = (joke) => {
  return new Promise((resolve, reject) => {
    let formattedJoke = {
      joke,
      timeCreated: new Date()
    }
    newJoke = new JokeModel(formattedJoke)
    newJoke.save()
      .then((newJoke) => {
        if (newJoke === null) throw new Error('Could not save joke')
        console.log('Save Success!')
        resolve()
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

JokeModel.getOneJoke = () => {
  return new Promise((resolve, reject) => {
    JokeModel.find()
      .then((data) => {
        if (data === null) throw new Error('No Jokes found')
        // Random Joke
        let joke = data[Math.floor(Math.random() * data.length)]
        resolve(joke)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}
