const express = require('express')
const greetingsRouter = require('./greetings.router')

const app = express()

// Reroutes all requests going to http://localhost:8080/greetings
// to the greetings router
app.use('/greetings', greetingsRouter)

app.listen(8080, () => {
  console.log('Listening on 8080')
})

