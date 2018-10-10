# process.argv[i]
Allows us to pass arguments into the program
1. 'node'
2. path to the file
3. and everything else as a string: variables

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

if (condition)
  one statement
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

* See if-else.js for exercise solutions

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

# Loops
* All loops can be translated as just writing if statements over and over again

## For Loops
* A loop that will execute `x` amount of times

```javascript
for (let i = 0; i < 10; i+=1) {
  console.log(i) // 0 to 9
}

// of if you are using if statements ( please no :))) )

let i = 0

if (i < 10) {
  console.log(i) // 0
  i += 1
}
if (i < 10) {
  console.log(i) // 1
  i += 1
}
if (i < 10) {
  console.log(i) // 2
  i += 1
}
if (i < 10) {
  console.log(i) // 3
  i += 1
}
if (i < 10) {
  console.log(i) // 4
  i += 1
}
if (i < 10) {
  console.log(i) // 5
  i += 1
}
if (i < 10) {
  console.log(i) // 6
  i += 1
}
// you get the idea
```

* write a function called `weird_series()` that will log all of the even numbers and multiples of 3 until 100

* write a function called `lil_pump()` that will log "Gucci Gang" 8 times
  and then log "Spend ten racks on a new chain" after the 8th time

* **Challenge** - write a function called `prime_time()` that logs all of the prime numbers until 50

## While Loops
* A loop that will keep exectuting as long as a condition is true

```javascript
let x = 0

while (x < 1000) {
  console.log('True for a little bit')
  x += 1 // something that will end the while loop sooner or later
}

console.log('Done')

// I'll pass on the if statement version :/
```

* write a function called `wheres_my_car()` that will loop through an array until we find the Prius
```javascript
function `wheres_my_car(car)` {
    let garage = ['F150', 'Model 3', 'Some Lemon', 'Prius', 'Not My Car']
    while (condition) {
      // TODO: add logic here
    }
}
```
* **Challenge** - write a function called `two_sum()` that will return all pairs that sum to a target value

  ```javascript
  function two_sum(arr, target) {
    let results = [];
    // Code goes here...
    return results;
  }

  let arr = [7, 0, -4, 5, 2, 3]
  twoSum(arr, 5); // [[0, 5], [2, 3]]
  ```
