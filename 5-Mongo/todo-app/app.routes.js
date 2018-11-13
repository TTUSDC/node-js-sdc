const express = require('express')
const path = require('path')
const Model = require(path.resolve(__dirname, 'app.model.js'))
const router = express.Router()

router.get('/get-all', async (req, res) => {
    try {
        const model = new Model()
        const todos = await model.getAllTodos()
        res.json({ todos: todos })
    } catch (err) {
        res.status(404).end()
    }
})

router.post('/create-todo', async (req, res) => {
    try {
        const name = req.body.name
        const content = req.body.content

        const model = new Model()
        const createdTodo = await model.createTodo(name, content)
        res.json({ createdTodo: createdTodo })
    } catch (err) {
        res.status(404).end()
    }
})

router.post('/create-two', async (req, res) => {
    try {
        const names = req.body.names
        const contents = req.body.contents
        const createdTodos = []

        for (i = 0; i < 2; i += 1) {
            const model = new Model()
            const createdTodo = await model.createTodo(names[i], contents[i])
            createdTodos.push(createdTodo)
        }

        res.json({ createdTodos: createdTodos })
    } catch (err) {
        console.error(err)
        res.status(404).end()
    }
})

router.post('/delete-todo', async (req, res) => {
    
})

module.exports = router