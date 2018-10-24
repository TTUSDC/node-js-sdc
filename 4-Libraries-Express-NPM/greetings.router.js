const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/hello', (req, res) => {
  res.send('Hello World!')
})

router.get('/replace', (req, res) => {
  fs.writeFile('animals-1.txt', 'Kitty!', (err) => {
    if (err) throw err
    res.send('Rewrote the animals-1.txt')
  })
})

router.get('/goodbye', (req, res) => {
  res.send('Good Bye World')
})

// Accepts get request while passing a
router.get('/findme/:id', (req, res) => {
  const { id } = req.params
  res.send(`Where are you number ${id}?`)
})

router.get('/animals', (req, res) => {
  // does not reroute the user at all
  res.download('./animals.txt')
})

module.exports = router
