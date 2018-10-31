const express = require('express')
const router = require('./app.router')
const bp = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use('/todo', router)

mongoose.connect('mongodb://localhost:27017/todos', {
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to MongoDB')
}).catch((err) => {
  console.error(err)
  process.exit()
})

app.listen(3000, () => {
  console.log('Listening on port: 3000')
})
