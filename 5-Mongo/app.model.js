const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  name: { type: String, required: true },
  timeCreated: { type: Date, required: true },
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

  async getTodoByName(name) {
    try {
      const todo = await this.mongo.findOne({ name }).exec()
      return todo
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async createTodoByName(name, content) {
    try {
      const data = {
        name,
        timeCreated: Date.now(),
        content
      }

      const newTodo = new this.mongo(data)
      const savedTodo = await newTodo.save()
      return savedTodo
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async updateTodoByName(name, changes) {
    try {
      const newTodo = await this.mongo.findOneAndUpdate({ name }, changes, { new: true}).exec()
      return newTodo
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async deleteTodoByName(name) {
    try {
      await this.mongo.findOneAndDelete({ name }).exec()
      return
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

module.exports = TodoModel
