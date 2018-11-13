const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bd = require('body-parser')
const router = require('./app.router')

const app = express()
app.use(cors())
app.use(bd.json())

const mongoConnectionString = 'mongodb://localhost:27017/acm'

// Mongoose Connection
mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true
}).then(() => {
  console.log('Connected to Database')
}).catch((err) => {
  console.error(err)
  process.exit()
})

app.use('/api', router)

app.listen(8080, () => console.log('Open server at port:', 8080))

module.exports = app
