const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const router = require(path.resolve(__dirname, 'app.routes.js'))

const app = express()

app.use(bp.json())

mongoose.connect('mongodb://miggylol:Lorenzo0925@ds217921.mlab.com:17921/sandbox', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected')
    })
    .catch((err) => {
        console.error(err)
    })

app.use('/api', router)

app.listen(3000, () => {
    console.log('Starting Server at port 3000')
})
