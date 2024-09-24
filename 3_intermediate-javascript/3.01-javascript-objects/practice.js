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
