// Comments use 2 back slashes. Theses are ignored

// Vocabulary
//
// Immutable:
// Cannot be changed
//
// Muttable:
// Can be changed
//
// Variables:
// Just like algebra. A representation
//
// Functions:
// f(x) = 2 + x
// Just like math.
//
// Arguments/Parameters:
// Data passed to functions. Can be strings, numbers, or even other functions. More on that later
//
// Strings:
// Letters, Characters, Sentences, Paragraphs. Use ', ", and `
//
// Numbers:
// All numbers, negative, positive, decimals(floats), super-decimals(longs)
//
// Objects:
// Key-value pairs that let you group certain data together

// variables let, const
const name = 'Miggy' // read-only
let favoriteIceCream = 'Ice Cream' // muttable

// Functions
function greet() {
  console.log('hello world')
  // process.stdout === console
  // log is the standard logging/printing function, accepts a string
}

// Functons with arguments
function greetPerson(name) {
  console.log(name)
}

// Functions that take numbers as arguments
function howOldAreYou(age) {
  console.log('I am', age, 'years old')
  console.log('I am ' + age + ' years old')
  console.log(`I am ${age} years old`)
}

// No such thing as a main function, you have to make one yourself

// Function Calls

function main() {
  greet()
  greetPerson('Miggy')
  howOldAreYou(9)
}

main()
