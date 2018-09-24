# Event Loop
* Javascript is async by nature.
* Javascript is single threaded
* Javascript is I/O focused
* Not the best for high computation (computing the first 1000000 prime numbers)

* We cannot expect most functions to complete before the next one begins

# Callbacks
* an unnamed function

```javascript
const lambdaFunc = (msg) => {
  console.log(msg)
}
```

We are saving a lambda function in a variable

**How do we call it?**
```javascript
function timer(sleepTime, callback) {
  console.log("CPU will sleep for: ", sleepTime)
  setTimeout(callback(), sleepTime)
  console.log("This should be called last but...")
}
```

```javascript
// What about this?
function print(i, callback) {
  console.log(i)
  callback()
}

function counter() {
  print(1, function() {
    print(2, function() {
      print(3, function() {
        print(4, function() {
          print(5, function() {
            print(6, function() {
              console.log('done!')
            })
          })
        })
      })
    })
  })
}

// This is called `callback hell`
```

* write a function that accepts a callback that will count to 10, and then
  call the callback function

* write a function that accepts an integer and a callback that will find an element in an
  array. If the integer does not exist, tell the user.

# Promises
* Abstracts callbacks
* States of Promises
  * fulfiled - an **action** to be done when the promise succeeds
  * rejeced - an **action** to be done when the promise fails
  * pending - when a promise has not been fulfiled or rejected
  * settled - done with everything
* **What does it mean for a promise to fail?**
  * We don't know the value that will be passed to a callback. It is async. What is we are trying
    to gather data from another server and we give them back data/queries? We will get back an error,
    instead of an object.

```javascript
function fakeAPI(name) {
  return new Promise(function(resolve, reject) {
    if (name === 'Miggy') {
      resolve('Some Data!')
    } else {
      reject(new Error('That is not my name!'))
    }
  })
}


fakeAPI('Reyes')
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    console.log(err)
  })
```

# Async/Await
* Abstracts Promises
* keywords `async` and `await`

```javascript
function fakeAPI(name) {
  return new Promise(function(resolve, reject) {
    if (name === 'Miggy') {
      resolve('Some Data!')
    } else {
      reject(new Error('That is not my name!'))
    }
  })
}

async function controller() {
  try {
    const bio = await fakeAPI('Miggy')
    const anotherBio = await fakeAPI('Josh')
  } catch (err) {
    console.log(err) // When the promise rejects with an error
  }
}
```
* Async/Await and Promises are mainly used in API calls

# Async in API calls
Lets make some API requests!

*Make sure to npm link packages*
