# Modules
- A module is a piece of code that is exported for use in a different function
- There is not size limit for how big a module can be
- we typically want to keep modules at a medium size
- Libraries and Modules are synomymous

## Common Modules/Libraries
* **http** - a module that handles http (Hyper Text Transfer Protocol) and starting up servers

  ```javascript
  const http = require('http')

  const Server = http.createServer((request, response) => {
    response.end('Good morning, Server!')
  })

  const port = 3000
  Server.listen(port)
  ```
* **fs** - a library that can handle reading files
  - There are 4 main functionalities/methods
  - `fs.readFile(path, callback)`
  - `fs.writeFile(path, callback)`
  - `fs.readFileSync(path)`
  - `fs.writeFileSync(path)`

  We pass a callback to fire when we are done reading the file
  ```javascript
  fs.readFile('./animals.txt', (data) => {
    console.log(data)
  })
  ```

  We block the thread and wait for the animals text to finish reading
  ```javascript
  const fs = require('fs')

  const animals = fs.readFileSync('./animals.txt')
  console.log(animals)
  ```

  We can also do the same things with `writeFile` and `writeFileSync`
  ```javascript
  fs.writeFile('animals.txt', 'Doggy!', (err) => {
    console.log('Updated')
  })

  fs.writeFileSync('animals.txt', 'Doggy!')
  console.log('WARNING, you cannot guarantee that the file has finished writing')
  ```
* **debug** - used for logging with levels
  - Sometimes we don't want to see all of the logging levels
  - We can control what we visible in app environments

  ```javascript
  const Debug = require('debug')
  // process.env.DEBUG=warn,error

  const logger = {
    info: Debug('dev'),
    warn: Debug('warn'),
    error: Debug('error')
  }

  logger.info('This is only visible when "dev" is included in process.env.DEBUG')
  logger.warn('You may want to use this warn users of what they are doing')
  logger.error('You may want this to be the only logging level activated in production')
  ```
* Express
    - Express is a framework for building APIs. It does this by abstracting
      Node's standard library `http` and making it into something really easy to use
    ```javascript
    // app.js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (response, request) => {
      res.send('Hello World!')
    })

    app.get('/goodbye', (request, response) => {
      res.send('Good Bye, world!')
    })

    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
    ```

    - We can also create a router to split up our code

    ```javascript
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
    ```

# Must Know Objects
* Date Object

  ```javascript
  const today = Date.now()
  const month = today.getDate()
  const day = today.getDay()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()
  ```
* Object
* String
* Number
* Array
