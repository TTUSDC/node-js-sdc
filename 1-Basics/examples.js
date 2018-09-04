// Write a function to calculate a person's age given their birth year and the current year

function calculate_age(birth_year, current_year) {
  let age = current_year - birth_year
  return age
}

let age = calculate_age(1999, 2018)
console.log(age)

// Write a function to convert inches to cm
function in_to_cm(inches) {
  let cm = inches * 2.54
  return cm
}

let conversion = in_to_cm(3)
console.log(conversion)
