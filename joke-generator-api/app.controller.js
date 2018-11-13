const Model = require('./app.model')

class JokeController {
  constructor() {
    this.DB = new Model()
  }

  async formatAndSaveJoke(joke) {
    try {
      let formattedJoke = {
        joke,
        timeCreated: new Date()
      }
      await this.DB.createJoke(formattedJoke)
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  async getJoke() {
    try {
      const joke = await this.DB.getOneJoke()
      return joke
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

module.exports = JokeController
