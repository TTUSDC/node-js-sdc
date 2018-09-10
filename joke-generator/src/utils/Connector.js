import axios from 'axios'

const request = axios.create({
  baseURL: process.env.BASE_URL
})

/**
 * Wrapper for the axios so that we can fetch the jokes from 3 different APIs
 */
class Request {
  getRonJoke = () => {
    return new Promise((resolve, reject) => {
      request.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then((data) => {
          resolve(data[0])
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  getCSJoke = () => {
    return request.get('https://geek-jokes.sameerkumar.website/api')
  }

  getChuckJoke = () => {
    return new Promise((resolve, reject) => {
      request.get('http://api.icndb.com/jokes/random')
        .then((data) => {
          let { joke } = data.value
          resolve(joke)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
