// -- iterate through obk -- //

// Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

// HINT: use a for loop

function printObject(obj) {
    // your code here...
    for (const property in obj) {
        console.log(`${property} - ${obj[property]}`);
    }
  }

  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };


  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120

//app academy answer has different syntax

// function printObject(obj) {
//     for (let key in obj) {
//       let value = obj[key];
//       console.log(key + ' - ' + value);
//     }
//   }



// -- cat builder -- //

// Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.

function catBuilder(name, color, toys) {
    // your code here...
    let answer = {};
    answer.name = name;
    answer.color = color;
    answer.toys = toys;

    return answer
  }

  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

  console.log()

  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }


// -- destructure array -- //

// Time to practice array destructuring! We have given you an array.
// Practice destructuring arrays by assigning variables to every value in the array below all in one line of code.
// Check your work by console.loging each of the variables to make sure you got them all.

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [firstEl, secondEl, thirdEl, fourthEl, fifthEL, sixthEl] = bigArray
console.log(firstEl)
console.log(secondEl)
console.log(thirdEl)
console.log(fourthEl)
console.log(fifthEL)
console.log(sixthEl)



// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
