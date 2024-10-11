/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

//base case: if arr.length is 0, return true. this means that it went through each and there wasn't a case where it is desc
//recursive case: if arr[0] > arr[1], then return false. you only need one instance of this to declare false.
//recursive step: if arr[0] > arr[1] is not satisfied ,then remove the first element from arr and check again

let isSorted = arr => {
  if (arr.length === 0) {
    return true
  }
  if (arr[0] > arr[1]) {
    return false
  } else {
    return isSorted(arr.slice(1))
  }
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
