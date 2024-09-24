/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:


***********************************************************************/

function keysInObject(obj) {
  // Your code here
  return Object.keys(obj)
}



// function keysInObject(obj) {
//   let answer = [];
//   for (let key in obj) {
//     let answer1 = `${key}`
//     answer.push(answer1)
//   }
//   return console.log(answer)
// }

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
keysInObject(animals); // => ["dog", "cat", "bison"]


let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(foods); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
