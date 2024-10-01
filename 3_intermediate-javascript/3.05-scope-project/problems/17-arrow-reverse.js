/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:



***********************************************************************/

// Your code here

let reverseStr = str => {
  let letters = str.split("");
  let answer = [];
  for (let i = letters.length - 1; i >= 0; i--) {
    answer.push(letters[i])
  }
  return answer.join("")
}

let result1 = reverseStr("hello"); // returns "olleh"
console.log(result1)
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
