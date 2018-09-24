const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/todos/1')
  .then(({ data }) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })
