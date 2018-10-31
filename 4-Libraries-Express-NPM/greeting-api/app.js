const express = require('express')
const path = require('path')
const AppRouter = require(path.resolve(__dirname, 'app.routes.js'))

const app = express()

// localhost:8080/api/greet
app.use('/api', AppRouter)

const port = 8080

app.listen(port, () => {
    console.log(`Listening on new port: ${port}`)
})