function even_odd() {
  let number = process.argv[2]

  // Do you remember what % does?
  if (number % 2 !== 0) {
    console.log('Odd!')
  } else {
    console.log('Even!')
  }
}

function chosen_pet_name() {
  let pet_name = process.argv[2]

  if (pet_name === 'Rocky') {
    console.log('I love that name!')
  } else if (pet_name === 'Bob') {
    console.log("Maybe...")
  } else {
    console.log("Not feeling that one")
  }
}

function alexa() {
  let temp = process.argv[2]

  if (temp < 30) {
    console.log('YES! Wear a jacket!')
  } else if (temp >= 30 && temp < 75) {
    console.log('Ehh')
  } else {
    console.log('Nah bro')
  }
}

function main() {
  process.argv.forEach((each) => console.log(each))
  even_odd()
  // chosen_pet_name()
  // alexa()
}
 main()
