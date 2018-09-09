# process.argv[i]
Allows us to pass arguments into the program
1. 'node'
2. path to the file
3. and everything else: variables

# If/ Else if/  Else Statements

Used for conditional code execution

`if` - start of the if block and requires a condition. **Required**

`else if` - another check that will only run if the condition above does not pass

`else` - runs if nothing above passes

**Format**
```
if (condition) {
  statements
  literally everything else
}

if (condition) {
  More statements
} else if (condition) {
  console.log('Will only run if above statement does not pass')
}

if (condition) one statement
```

Real Example
```javascript
let age = 17

if ( age === 21 ) {
  console.log('You are of legal age!')
} else {
  console.log('You are still a baby!')
}
```

* Comparators for contitional statements

    * `===` equivalent to
    * `!==` not equivalent to
    * `>=`  greater than or equal to
    * `<=`  less than or equal to
    * `<`   less than
    * `>`   greater than
    * `&&`  and
    * `||`  or

* See examples.js for exercise solutions

* write a function called `even_odd()` that will check if a given number is even or odd and print out
  the result

  **Hint: Use process.argv to pass arguments into the program**

  ```javascript
  // Fill int he blanks!
  if (condition) {
    console.log('Odd!')
  } else {
    console.log('Even!')
  }
  ```

* write a function called `chosen_pet_name()` that will check to see if the pet name matches the desired name, "Rocky".


* write a function called `alexa()` to check whether or not someone should wear a jacket given a temperature
