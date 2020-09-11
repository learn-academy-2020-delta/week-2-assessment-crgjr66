// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const divBy3 = (number) => {
  if (number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

console.log(divBy3(num1));
console.log(divBy3(num2));
console.log(divBy3(num3));


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const firstLetterCap = (array) => {
  return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}

console.log(firstLetterCap(randomNouns));


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNums = (array) => {
  // first find/filter the numbers
  let numArray = []
  numArray = array.filter(value => (typeof value === "number"))

  // then sort the numbers from least to greatest
  // by sorting based on the difference between the 2 items being compared
  return numArray.sort((a,b)=>a-b);
}

console.log(onlyNums(mixedDataArray));

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const firstVowel = (string) => {

  // what are vowels? make an array of them
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for(let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      // return the index as soon as you find it
      return i;
    }
  }
}

console.log(firstVowel(vowelTester1));
console.log(firstVowel(vowelTester2));


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (number1, string, number2) => {

  if (string === "+"){
    return number1 + number2
  } else if (string === "-") {
    return number1 - number2
  } else if (string === "*") {
    return number1 * number2
  } else if (string === "/") {
      if (number2 === 0){
        return `Can't divide by ${number2}!`
      } else {
        return number1 / number2
      }
  } else {
    return "Not a valid numerical operator"
  }
}

// Uncomment and use the following console logs to test your function
 console.log(calculator(3, "*", 9))
 // Expected output: 27

 console.log(calculator(16, "+", 3))
// Expected output: 19

 console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"



// --------------------6) Create a function that takes in the following variable and returns only the websites that end in ".io".

var websites = ["codepen.io", "codecademy.com", "coursera.org", "codepen.io", "udemy.com", "pluralsight.com", "udacity.com", "sitepoint.com"]
// Expected output: "codepen.io" "codepen.io"

const findIoSites = (array) => {

  // array to hold our found io sites
  let ioSitesArray = []

  // map over the array and access each website
  array.map(currentSite => {

    let vowelIndex = 0
    // first find the index of the '.'
    for(let i = 0; i < currentSite.length; i++) {
      // if you find the '.' and the next indexed value is 'i'
      if (currentSite[i] === '.' && currentSite[i + 1] === 'i') {
        // assume we found an .io website
        ioSitesArray.push(currentSite)
        break
      } // end if
    } // end for
  }); // end .map

  return ioSitesArray
}

console.log(findIoSites(websites));


// --------------------6) STRETCH: Write a function that takes a number as an argument and uses a WHILE loop to count up to that number from 0.

const countUsingWhile = (number) => {
  // need a counter for the loops
  let count = 0
  // need an array for the values
  let numberArray = [0]
  // loop until we reach our number
  while(count++ < number) {
    // keep track of the numbers
    numberArray.push(count);
  }
  return numberArray;
}

console.log(countUsingWhile(6));
