const express = require('express')
const axios = require('axios')
const JokeController = require('./app.controller')

const router = express.Router()

router.get('/user', async (req, res) => {
  try {
    const ctrl = new JokeController()
    const joke = await ctrl.getJoke()
    res.json(joke)
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

router.post('/user', async (req, res) => {
  try {
    const ctrl = new JokeController()
    await ctrl.formatAndSaveJoke(req.body.joke)
    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

/**
 * Fetches Chuck Norris Jokes
 */
router.get('/chuck', async (req, res) => {
  try {
    const { data } = await axios.get('http://api.icndb.com/jokes/random')
    res.json({ joke: data.value.joke })
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

/**
 * Fetches Computer Science Jokes
 */
router.get('/cs', async (req, res) => {
  try {
    const { data } = await axios.get('https://geek-jokes.sameerkumar.website/api')
    res.status(200).json({ joke: data })
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

/**
 * Fetches Ron Swanson Jokes
 */
router.get('/ron', async (req, res) => {
  try {
    const { data } = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    res.json({ joke: data[0] })
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

module.exports = router
