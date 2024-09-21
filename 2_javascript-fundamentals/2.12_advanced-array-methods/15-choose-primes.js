/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:



*/

// let isPrime = function(num) {
//     // Your code here
//     for( let i = 2; i < num; i++) {
//         if(num%i === 0) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

function isPrime(num) {
    for (let i=2; i<num; i++) {
        if(num%i===0) {
            return false
        }
    } return true
}

console.log(isPrime(2017))
console.log(isPrime(24))
console.log(isPrime(9))

let choosePrimes = function(nums) {
    let answer = [];
    nums.forEach(function(num){
        if(isPrime(num)) {
            answer.push(num)
        }
    })
    return answer
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
