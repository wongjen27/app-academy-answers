/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:


***********************************************************************/

//fibonacci(num)
//base case: num <= 1
//r case: when num > 1
//r step: num - 1

function fibonacci (num) {
  if (num === 0) {
    return 0
  }
  if (num === 1) {
    return 1
  }
    return fibonacci(num - 1) + fibonacci(num - 2)
}



console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3

console.log()
console.log(fibonacci(10)); // 55


let arr = [0,1,2,3]
console.log(arr[arr.length - 2] + arr[arr.length - 1])


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
