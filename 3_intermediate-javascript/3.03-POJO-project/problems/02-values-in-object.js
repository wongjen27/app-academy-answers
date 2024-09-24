/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:


***********************************************************************/

// function valuesInObject(obj) {
//   // Your code here
//   console.log(Object.values(obj))
// }

function valuesInObject(obj) {
  let answer = [];
  for( const key in obj) {
    answer.push(`${obj[key]}`)
  }
  return answer
}


let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
