/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:


***********************************************************************/

// b case: arr.length = 0
// r case: arr.length > 0
// r step: arr.splice(1)

let array = [0,1,2,3]
console.log(array.splice(1))


function isSorted(arr) {
  if (arr.length <= 1) {
    return true
  }
  if (arr[0] < arr[1]) {
    return isSorted(arr.splice(1))

  }
  return false
}


console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
