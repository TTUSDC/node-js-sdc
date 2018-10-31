const fs = require('fs')

fs.readFile('animal.txt', 'utf8', (err, data) => {
  if (err) console.error(err) // throw err
  console.log(data)
})
