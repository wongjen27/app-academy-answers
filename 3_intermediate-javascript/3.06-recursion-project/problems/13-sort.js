/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:


***********************************************************************/

function sort(nums, sorted = []) {
  if (nums.length === 0) {
    return sorted
  }
  let min = nums[0];
  let minIndex = 0;
  nums.forEach(function(element, i) {
    if (min > element) {
      min = element
      minIndex = i
    }
  })
  sorted.push(min);
  nums.splice(minIndex, 1)
  return sort(nums, sorted)
}

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []




//scrap work//
let arr = [7,2,3,4]
console.log(arr.filter(item => item !== 3))



function min (arr) {
  let min = arr[0];
  arr.forEach(element => {
    if (element < min) {
      min = element
    }
  })
  return min
}


console.log(min([7,4,8,13,2,4,90]))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
