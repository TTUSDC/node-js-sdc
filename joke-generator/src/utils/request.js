import axios from 'axios'
import logger from 'utils/logger'

/**
 * Wrapper for the axios so that we can fetch the jokes from 3 different APIs
 */
export default class Request {
  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:8080/',
    })
  }

  // Sends the joke as a post request
  createUserJoke = joke => new Promise((resolve, reject) => {
    this.request.post('/user', { joke })
      .then(() => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })

  // Fetches a saved joke from the database
  getUserJoke = () => new Promise((resolve, reject) => {
    this.request.get('/user')
      .then(({ data }) => {
        logger.info(data)
        resolve(data.joke)
      })
      .catch((err) => {
        reject(err)
      })
  })

  getRonJoke = () => new Promise((resolve, reject) => {
    this.request.get('/ron')
      .then(({ data }) => {
        resolve(data.joke)
      })
      .catch((err) => {
        reject(err)
      })
  })

  getCSJoke = () => new Promise((resolve, reject) => {
    this.request.get('/cs')
      .then(({ data }) => {
        resolve(data.joke)
      })
      .catch((err) => {
        reject(err)
      })
  })

  getChuckJoke = () => new Promise((resolve, reject) => {
    this.request.get('/chuck')
      .then(({ data }) => {
        resolve(data.joke)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
