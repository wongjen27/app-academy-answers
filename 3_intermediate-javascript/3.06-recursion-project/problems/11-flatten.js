/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:


***********************************************************************/

//this doesn't use recursion. it does the job, but it is not following the instructions.
// function flatten(arr) {
//   if(arr.length === 0) {
//     return []
//   }
//   return arr.join(",").split(",").map(Number)
// }

//base case: arr.length === 0
//r case: arr.length >= 1
//r step: arr.splice(1)

// let arr = [1,2,3,4]
// console.log(arr.splice(1))
// let arr2 = [[1,2,[3]], 4, 5]
// console.log([].concat(arr2[0]).concat(arr2[1]).concat(arr2[2]))

//this is only works if there are sub arrays one level deep. doesn't work if there's two nested arrays.
// function flatten(arr) {
//   if (arr.length === 0) {
//     return []
//   }
//   return [].concat(arr[0]).concat(flatten(arr.splice(1)))
// }

function flatten(arr) {
  let result = [];

  // Iterate over each element in the array
  for (let element of arr) {
      if (Array.isArray(element)) {
          // If the element is an array, concatenate the result of flattening it
          result = result.concat(flatten(element));
      } else {
          // If it's not an array, push the element to the result
          result.push(element);
      }
  }

  return result;
}




console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
