const axios = require('axios')
const request = require('request')

axios.get('http://jsonplaceholder.typicode.com/todos/1')
  .then(({ data }) => {
    console.log(data)
  })
  .catch((err) => {
    console.error(err)
  })

request.get('http://jsonplaceholder.typicode.com/todos/1', (err, data) => {
  if (err) throw err
  console.log(data.body)
})

function ApiCall() {
  return new Promise(async (resolve, reject) => {
    try {
      const fetchedData = await axios.get('http://jsonplaceholder.typicode.com/todos/1')
      resolve(fetchedData.data)
    } catch (err) {
      reject(err)
    }
  })
}

ApiCall().then((todo) => console.log(todo) )
