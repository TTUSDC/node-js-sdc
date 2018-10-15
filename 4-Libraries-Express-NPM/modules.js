const http = require('http')
const fs = require('fs')
const Debug = require('debug')

const server = http.createServer((request, response) => {
  response.end('Good morning!')
})

// server.listen(3000, () => {
//   console.log('Listening on Port 3000')
// })

// We pass a callback to fire when we are done reading the file
fs.readFile('animals.txt', 'utf8', (err, data) => {
  console.log(data)
})
console.log('Done!')

// We block the thread and wait for the animals text to finish reading
const animals = fs.readFileSync('./animals.txt', 'utf8')
console.log(animals)
console.log('Done!')

// process.env.DEBUG=warn,error

const logger = {
  info: Debug('dev'),
  warn: Debug('warn'),
  error: Debug('error')
}

logger.info('This is only visible when "dev" is included in process.env.DEBUG')
logger.warn('You may want to use this warn users of what they are doing')
logger.error('You may want this to be the only logging level activated in production')

// greetings.routes.js
const express = require('express')
const router = express.Router()

router.get('/hello', (req, res) => {
  res.send('Hello World!')
})

router.get('/goodbye', (req, res) => {
  res.send('Good Bye World')
})

router.get('/findme', (req, res) => {
  res.send('Where are you?')
})

router.get('/go-away', (req, res) => {
  res.send('You can leave now')
})

exports = router

// app.js
// . . .
// . . .
// . . .
const greetingsRouter = require('./greetings.router.js')
app.use('/greetings', greetingsRouter)
// . . .
// . . .
// . . .

// All of those routes are now available through
// http://localhost:<chosen-port>/greetings/<whatever route>
