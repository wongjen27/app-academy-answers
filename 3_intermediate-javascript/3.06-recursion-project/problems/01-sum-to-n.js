/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:


***********************************************************************/

//create a variable sum
//if num is less than 0 then null
//if num is greater than or equal to 0 then sum
//use recursion to add num - 1 t the sum
//return sum


function sumToN(num) {
  if (num < 0) {
    return null
  } else if (num > 0) {
  return num + sumToN(num - 1)
  } else if (num === 0) {
    return 0
  }
}

console.log(sumToN(5)) // returns 15

console.log()

console.log(sumToN(0))
sumToN(1)  // returns 1
sumToN(9)  // returns 45
console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
