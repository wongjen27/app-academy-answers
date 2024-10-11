/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:


***********************************************************************/

//b case is less than 0
//r case is greater than 0
//r step is num - 1

/*
create a function that takes a number as an arg
create answer = 0
if num is less than 0, then return null
if num === 0 then return answer
if num is greater than 0, then
    num to answer
    num = num - 1, recursive
return answer
*/

let sumToN = (num) => {
  let answer = 0;
  if (num < 0) {
    return null
  }
  if (num === 0) {
    return answer
  }
  if (num > 0) {
    answer = answer + num + sumToN(num - 1)
  }
  return answer
}


console.log(sumToN(5)) // returns 15
console.log(sumToN(1))  // returns 1
console.log(sumToN(9))  // returns 45
console.log(sumToN(-8))  // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
