# Event Loop
* Javascript is async by nature.
* Javascript is single threaded
* Javascript is I/O focused
* Not the best for high computation (computing the first 1000000 prime numbers)

* We cannot expect most functions to complete before the next one begins

# Callbacks
an unnnamed or defined function that is passed as an argument to another one
```javascript
function goodbye() {
  console.log('goodbye')
}

function hello() {
  console.log('hello!')
}

hello()
setTimeout(goodbye, 1000)
hello()
```
# Promises
# Async/Await
