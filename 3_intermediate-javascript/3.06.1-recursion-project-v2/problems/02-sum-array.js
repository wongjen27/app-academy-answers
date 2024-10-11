/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:


***********************************************************************/

//b case is arr has no elements
//r case is arr has elements
//r step is arr.slice(1)

//create a function that takes in an array
//create a variable let answer = 0
//  adds the first element to answer
//  slice to take the first element of the arr out
//  recursive the arr
//return answer


let sumArray = (arr) => {
  if (arr.length === 0) {
    return 0
  } else {
    return arr[0] + sumArray(arr.slice(1))
  }
}

let array1 = [1,2,3]
console.log(array1.slice(1))



console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
