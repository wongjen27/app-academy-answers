/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:



*/

let sumWithReduce = function(nums) {
  // Your code here
  if(nums.length === 0) {
    return []
  } else {
    let answer = nums.reduce(function(sum, num){
      return sum += num;
    })
    return answer
}
};

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}
