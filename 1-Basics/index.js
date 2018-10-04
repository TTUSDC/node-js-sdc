function hello() {
    console.log("Hello World!")
}

let ice_cream = 'Vanilla'
let favorite = `${ice_cream} is my favorite ice cream`

let num = 18
let almost_pi = 3.14465836875643875

let falsy = false
let truthy = true

let x = 120

let big_number = x > 100

let person = {
    name: 'Miggy',
    age: 18,
    interests: {
        math: false,
        food: true
    }
}

let first = 10
let second = 3

function age_calc(current_year, birth_year) {
    // ...
}

function inches_cm(inches) {
    // ...
    return "hello"
}

let obj = {
    name: "Miggy",
    age: 18,
    catagory1: {
        foo: "I like math",
    },
    catagory2: {
        bar: 'I like Coding'
    }
}

let array = ["Miggy", "Josh"]

let element = array.pop()


array.push("Matt")
array.push("Brett")


function fixit(names) {
    let sorted_names = names.sort().reverse()
    console.log(sorted_names)
}

let random_names = new Set([
    "Miggy", "Simon", "Juanita", "Matt",
    "Wenhao", "Angel", "Baylee", "Kevin",
    "Haroon"
])

let map = new Map()

map.set("color", "blue")
console.log(map)

console.log(map.size)

let iterator = map.entries()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)


function count_chars(phrase) {
    let map = new Map()
    for (let i = 0; i < phrase.length; i = i + 1) {
        // Check whether or not the letter exists
        // If it does, increase value by 1
        // Otherwise, add the it
    }

    
    
    // if statements
    // if ( word == "Hello") {
    //     console.log("Hello")
    // } else {
    //     console.log("Happens if the if statement fails")
    // }

    // for (let i = 0; i < word.length; i += 1) {

    // }

    // while(true) {
        
    // }
}

let word = "Hello my name is Miggy What is your name"

count_chars(word)
