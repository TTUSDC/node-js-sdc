const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
  joke: { type: String, required: true },
  timeCreated: { type: Date, required: true }
})

class JokeModel {
  constructor() {
    this.mongo = mongoose.model('Jokes', jokeSchema)
  }

  async createJoke(joke) {
    try {
      const newJoke = new this.mongo(joke)
      const savedJoke = await newJoke.save()
      if (savedJoke === null) throw new Error('Could not save joke')
      console.log('Save Success!')
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async getOneJoke() {
    try {
      const data = await this.mongo.find().exec()
      if (data === null) throw new Error('No Jokes found')
      // Random Joke
      let joke = data[Math.floor(Math.random() * data.length)]
      return joke
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

module.exports = JokeModel
