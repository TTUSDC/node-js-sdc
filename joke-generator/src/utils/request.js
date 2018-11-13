import axios from 'axios'

/**
 * Wrapper for the axios so that we can fetch the jokes from 3 different APIs
 */
export default class Request {
  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:8080/api',
    })
  }

  // Sends the joke as a post request
  async createUserJoke(joke) {
    try {
      await this.request.post('/user', { joke })
    } catch (err) {
      throw err
    }
  }

  // Fetches a saved joke from the database
  async getUserJoke() {
    try {
      const { data } = await this.request.get('/user')
      return data.joke
    } catch (err) {
      throw err
    }
  }

  async getRonJoke() {
    try {
      const { data } = await this.request.get('/ron')
      return data.joke
    } catch (err) {
      throw err
    }
  }

  async getCSJoke() {
    try {
      const { data } = await this.request.get('/cs')
      return data.joke
    } catch (err) {
      throw err
    }
  }

  async getChuckJoke() {
    try {
      const { data } = await this.request.get('/chuck')
      return data.joke
    } catch (err) {
      throw err
    }
  }
}
