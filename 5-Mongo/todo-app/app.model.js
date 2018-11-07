const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: { type: String, required: true },
    dateCreated: { type: Date, required: true },
    content: { type: String, required: true }
})

class TodoModel {
    constructor() {
        this.mongo = mongoose.model('todos', todoSchema)
    }

    async getAllTodos() {
        try {
            const todos = await this.mongo.find().exec()
            return todos
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async createTodo(name, content) {
        try {
            const data = {
                name: name,
                dateCreated: Date.now(),
                content: content
            }

            const newTodo = new this.mongo(data)
            const savedTodo = await newTodo.save()
            return savedTodo
        } catch (err) {
            console.error(err)
            return err
        }
    }
}

module.exports = TodoModel