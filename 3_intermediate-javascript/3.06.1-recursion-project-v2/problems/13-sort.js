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

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

//base case: if length of nums is 0
//recursive case:
//recursive step:


function sort(nums, sorted = []) {
  if (nums.length === 0) {
    return sorted
  }
  let min = nums[0];
  let index = 0
  for (let i = 1; i <= nums.length - 1; i++) {
    if (min > nums[i]) {
      min = nums[i]
      index = i
    }
  }
  nums.splice(index,1);
  sorted.push(min)
  return sort(nums,sorted)
}



function minarr (arr) {
let min = arr[0];
for (let i = 1; i <= arr.length - 1; i++) {
  if (min > arr[i]) {
    min = arr[i]
  }

}
return min
}

let array = [4,2,3,2,1]
console.log(minarr(array))


console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
