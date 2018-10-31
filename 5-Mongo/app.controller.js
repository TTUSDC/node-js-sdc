const TodoModel = require('./app.model')

class TodoController {
  constructor() {
    this._db = new TodoModel()
  }

  async fetchAllTodos() {
    try {
      const todos = await this._db.getAllTodos()
      return todos
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async addATodo(todo) {
    try {
      const todos = await this._db.getAllTodos()
      for (let each of todos) {
        if (each.name === todo.name) {
          throw new Error('There is alread a todo with this name')
        }
      }
      const newTodo = await this._db.createTodoByName(todo.name, todo.content)
      return newTodo
    } catch (err) {
      console.error(err)
      return err
    }
  }
}

module.exports = TodoController
