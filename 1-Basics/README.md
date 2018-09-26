# Lesson 1: Basics

### What is NodeJS
* A JavaScript Runtime that will let developers run javascript on the server
* **What it used to be**
  * A really shitty language that no one liked to use since it it was only used
    on the browser and people wanted to use "real" programming languages.
  * Just for animations and simple API calls
  * There were many quirks with JavaScript. It was written in 10 days in May 1995
    * `var` and lexical scopes
    * strict equality `===` (checks for the same type and value)
      and shallow equality `==` (changes the type and then compares)
* **What it is now**
    * A full-fledged programming language with standards and data libraries for working with simple data structures
    * Used to develop apps for all platforms, including iOS, Android, Mac, Linux and  Web
    * Full support for event driven programming with Promises.

### Why we use it
* To build apps on the server and on the client. We can build ANYTHING with it!
* Companies need JavaScript developers.
* Async. Crazy fast I/O performance. Check [this](https://www.tandemseven.com/blog/performance-java-vs-node/) out!
* It's better than Java for Web Applications
* Companies use it extensively
    * Facebook
    * AirBnb
    * Slack
    * Discord
    * Netflix - Migrated from Java to NodeJS
    * Yahoo
    * Instagram
    * Uber
    * Paypal
    * Ebay - Migrated from Java to NodeJS
    * NASA
    * Walmart

**Not a shitty language anymore, huh?**

### Similarities/Differences between Python and NodeJS
|            Python           |         JavaScript         |        Both       |
|:---------------------------:|:--------------------------:|:-----------------:|
|         Synchronous         |            Async           |    Interpreted    |
|         uses indents        | uses C-like code structure | Simple Data Types |
| Lot's of Standard Libraries |   Some Standard Libraries  |                   |

### Installing git and git bash
* You can download everything [here](https://git-scm.com/downloads)
* This is so that you can run bash on Windows

### Hello World!
```javascript
/**
 * A function that calls Hello, World!
 */
function hello() {
  console.log('Hello, World!')
}

hello() // 'Hello, World!'
```
We can call `hello()` as many times as we want. Try it!

### Strings
* Anything having to do with sentences or letters
```javascript
// Theses are all strings
let ice_cream = 'I love ice cream!'
let another_fact = 'I enjoy making apps :)'
let character = 'L'
```

### Numbers
* Anything having to do with real numbers, they are all numbers
```javascript
let age = 18
let legal_age = 21
let child_age = 9
let almost_pi = 3.1415926535
```

### Booleans
* Simply true or false, can explicit or derived
```javascript
let falsy_value = false
let truthy_value = true
let big_number = 200 > 100 // true
let small_number = 200 < 100 // false
let maybe_big_or_small = 200 > x // Depends on what `x` is at that point in time
```

### Object literals
* Objects in code that help describe similar data
* Does not necessarily need to have the same data types (string, numbers or Object literals)
```javascript
let person = {
  name: 'Miggy', // String data type
  age: 18, // Number data type
  interests: { // nested objects
    math: false, // Booleans
    food: true
  }
}
```
* Accessed by using dot/bracket notation
```javascript
person.age // 18
person.interests // { math: false, food: true }
person['name'] // 'Miggy'
```

### Printing
```javascript
console.log('Hi!') // 'Hi!'

let x = 9
console.log(9) // 9

// String templates: Notice the back ticks instead of the '
let name = 'Migs'
console.log(`What up, ${name}`) // 'What up, Migs'

// Multi argument prints
console.log('What up,', name) // 'What up, Migs'
```
* It doesn't matter what the data type you want to print. It just does it.

### Math
```javascript
2 + 2 // 4

let x = 8
let y = 9
x + y + 4 - 2 // 20

// Modulus
10 % 3 // 1 because there is a remainder of 1

// Multiplication
10 * 3 // 30

// Division
27 / 9 // 3
```

* Create an object literal that contains your name, age, major and your favorite cereal

* Create an nested object literal that contains 2 catagories(these will be your objects), 3 truths and 3 lies

### Data Structures
**Arrays** - A vector containing data, accessible through index
```javascript
let baby_names = ['Ashley', 'Lilo', 'Jake', 'Landon']
let mixed_bag = ['Eggs', 9, { fun: true }, false]
```
* Common Array methods(functions that you can call to manipulate objects)
    * `.sort()`
    * `.keys()`
    * `.pop()`
    * `.push()`
    * `.reverse()`

**Sets**
* Does not allow duplicates and allows for quick existence look ups
* Unordered
* Basically a Map with `true` as the values

```javascript
// Requires a 2D array
let newSet = new Set([9, 8, 7, 7, 6])
newSet // [9, 8, 7, 6]
```
* Common Set Methods
    * `.add()`
    * `.delete()`
    * `.has()`
    * `.size`

**Maps/HashMap/Dictionary**
* a data structure for quick value and existence look ups
* Ordered (by time of insertion)
* Works really well with removing an deleting/adding/adding to key/values

```javascript
// Requires a 3D array with two elements in each sub array
let dictionary = new Map([['name', 'Miggy'], ['age', 9], ['interests', 'eatting']])
```
* Common Map methods
    * `.set(key, value)`
    * `.get(key)`
    * `.delete(key)`
    * `.has(key)`
    * `.size`
