const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/greet', (req, res) => {
    res.send('Hello! I am an API!')
})

// Accepts get request while passing a
router.get('/findme/:id', (req, res) => {
  const { id } = req.params
  res.send(`Where are you number ${id}?`)
})

router.get('/animals', (req, res) => {
  // does not reroute the user at all
  res.download(path.resolve(__dirname, 'animals.txt'))
})

module.exports = router