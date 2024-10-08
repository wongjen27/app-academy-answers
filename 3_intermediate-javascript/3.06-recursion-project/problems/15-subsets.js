/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:



Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
//create a helper function that takes in an array and a value
//start a for loop that goes through each element
//concat new element that takes each element of the array and append the value to the end
//return the array


//create a function called subsets
//create answer = [[]]
//create a for loop
//use helper function to create the subset
//return answer


//b case: stop looping when it is the last element of the array
//r case: if there are still elements in the array
//r step: next element of the array

function subsets(arr) {
  let answer = [[]];
  if (arr.length === 0) {
    return answer
  } else {
    for (let i = 0; i <= arr.length - 1; i++) {
      answer = answer.concat(helper(answer, arr[i]))
   }
  }
  return answer
}

function helper(arr, value) {
  let answer = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let element = arr[i];
    answer.push(arr[i].concat(value))
  }
  return answer
}

console.log(helper([[1],[2],[3]], 4))

console.log()



console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
