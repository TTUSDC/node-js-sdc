const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

/**
 * Fetches Chuck Norris Jokes
 */
app.get('/chuck', (req, res) => {
  axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
      res.json({ joke: response.data.value.joke })
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

/**
 * Fetches Computer Science Jokes
 */
app.get('/cs', (req, res) => {
  axios.get('https://geek-jokes.sameerkumar.website/api')
    .then((response) => {
      res.status(200).json({ joke: response.data })
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

/**
 * Fetches Ron Swanson Jokes
 */
app.get('/ron', (req, res) => {
  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => {
      res.json({ joke: response.data[0] })
    })
    .catch((err) => {
      res.status(404).json({ err: err })
    })
})

app.listen(8080, () => console.log('Open server at port:', 8080))

module.exports = app
