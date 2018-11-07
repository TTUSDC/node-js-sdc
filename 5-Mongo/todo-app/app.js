const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const router = require(path.resolve(__dirname, 'app.routes.js'))

const app = express()

app.use(bp.json())

app.use('/api', router)

mongoose.connect('mongodb://localhost:27017/todos', {
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to MongoDB')
}).catch((err) => {
  console.error(err)
  process.exit()
})


app.listen(3000, () => {
    console.log('Starting Server at port 3000')
})
