// Write a function to calculate a person's age given their birth year and the current year

function calculate_age(birth_year, current_year) {
  let age = current_year - birth_year
  return age
}

// Write a function to convert inches to cm
function in_to_cm(inches) {
  let cm = inches * 2.54
  return cm
}

// Write a function that will print a list of names in reverse alphabetical order
function fixit(names) {
  const sorted = names.sort().reverse()

  for (let name in sorted) {
    console.log(sorted[name])
  }
}

let random_names = ["Miggy", "Simon", "Juanita", "Matt", "Wenhao", "Angel", "Baylee", "Kevin", "Haroon"]


// Count the number of characters within a given string
function count_chars(word) {
  const char_map = new Map()
  for (let i = 0; i < word.length; i += 1) {
    if (!char_map.has(word[i])) {
      char_map.set(word[i], 1)
    } else {
      let current_val = char_map.get(word[i])
      char_map.set(word[i], current_val += 1)
    }
  }

  let iterator = char_map.entries()

  while(true) {
    let current_entry = iterator.next().value
    if (current_entry == undefined) {
      break
    } else {
      console.log(`${current_entry[0]} ${current_entry[1]}`)
    }
  }
}

let word = "Hello my name is Miggy What is your name"
