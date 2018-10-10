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

function weird_series() {
  for(let i = 0; i <= 100; i += 1) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i)
  }
}

function lil_pump() {
  for(let i = 0; i < 8; i += 1) {
    console.log('Gucci Gang')
  }
  console.log('Spend ten racks on a new chain')
}

function prime_time() {
  let sieve = []
  let i
  let j
  let primes = [];

  for (i = 2; i <= 50; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)
      for (j = i < 1; j <= 50; j += i) {
        sieve[j] = true
      }
    }
  }
  console.log(primes)
}

function wheres_my_car(car) {
  let garage = ['F150', 'Model 3', 'Some Lemon', 'Prius', 'Not My Car']
  let i = 0
  while(i < garage.length) {
    if(garage[i] === car) {
      console.log("Found the car: ", garage[i])
    }
    i += 1
  }
}

function two_sum(arr, target) {
  let results = [];
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        results.push([arr[i], arr[j]])
      }
    }
  }

  console.log(results)
}

function main() {
  even_odd()
  chosen_pet_name()
  alexa()
  weird_series()
  lil_pump()
  prime_time()

  const car = 'Some Lemon'
  wheres_my_car(car)

  let arr = [7, 0, -4, 5, 2, 3]
  two_sum(arr, 5)
}

main()
