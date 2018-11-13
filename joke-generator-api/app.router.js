const express = require('express')
const axios = require('axios')
const JokeModel = require('./app.model.js')

const router = express.Router()

router.get('/user', async (req, res) => {
  try {
    const joke = await JokeModel.getOneJoke()
    res.json(joke)
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

router.post('/user', async (req, res) => {
  try {
    await JokeModel.createOneJoke(req.body.joke)
    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

/**
 * Fetches Chuck Norris Jokes
 */
router.get('/chuck', (req, res) => {
  axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
      res.json({ joke: response.data.value.joke })
    })
    .catch((err) => {
      console.error(err)
      res.status(404).json({ err })
    })
})

/**
 * Fetches Computer Science Jokes
 */
router.get('/cs', (req, res) => {
  axios.get('https://geek-jokes.sameerkumar.website/api')
    .then((response) => {
      res.status(200).json({ joke: response.data })
    })
    .catch((err) => {
      console.error(err)
      res.status(404).json({ err })
    })
})

/**
 * Fetches Ron Swanson Jokes
 */
router.get('/ron', (req, res) => {
  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => {
      res.json({ joke: response.data[0] })
    })
    .catch((err) => {
      console.error(err)
      res.status(404).json({ err })
    })
})

module.exports = router
