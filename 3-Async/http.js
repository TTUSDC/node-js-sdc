const request = require('http')

request.get('http://jsonplaceholder.typicode.com/todos/1', function(res){

  let data = ''

  // Adds the chunk of data to the data variable
  res.on('data', function(chunk) {
    data += chunk
  })

  // Reads the final result
  res.on('end', function(){
    console.log(data)
  })
})


