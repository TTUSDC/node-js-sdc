const express = require('express')
const Controller = require('./app.controller')

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    const ctrl = new Controller()
    const todos = await ctrl.fetchAllTodos()
    res.status(200).json({ todos })
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

router.post('/add', async (req, res) => {
  try {
    const ctrl = new Controller()
    const data = {
      name: req.body.name,
      content: req.body.content
    }
    const todo = await ctrl.addATodo(data)
    res.status(200).json(todo)
  } catch (err) {
    console.error(err)
    res.status(404).json({ err })
  }
})

// TODO: Fill out the rest of the routes

module.exports = router
