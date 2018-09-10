import axios from 'axios'

const request = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:8080
})

/**
 * Wrapper for the axios so that we can fetch the jokes from 3 different APIs
 */
class Request {
  getRonJoke = () => {
    return new Promise((resolve, reject) => {
      axios.get('/ron')
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getCSJoke = () => {
    return new Promise((resolve, reject) => {
      axios.get('/ron')
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getChuckJoke = () => {
    return new Promise((resolve, reject) => {
      axios.get('/ron')
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
