/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

let flatten = arr => {
  let answer = [];
  if (arr.length === 0) {
    return answer
  }
  if(Array.isArray(arr[0])) {
      answer = answer.concat(flatten(arr[0]))
    } else {
      answer = answer.concat(arr[0])
    }
      return answer.concat(flatten(arr.slice(1)))
  }

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3, 4, [5,6]]]])); // [1, 2, 3]

//return answer.concat(arr[0]),flatten(arr.slice(1))


let array1 = [1, [2, [3]]]
console.log(...array1)

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
