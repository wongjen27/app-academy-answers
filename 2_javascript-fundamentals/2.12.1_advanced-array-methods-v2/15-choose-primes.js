/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

// let isPrime = function(num) {
//     if (num < 1) return false
//     for (let i = 2; i <= num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//         }
//     return true
// }

// console.log(isPrime(5))

// let choosePrimes = function(nums) {
//     let answer = [];
//     nums.forEach(element => {
//         if (isPrime(element)) {
//             answer.push(element)
//         }
//     });
//     return answer
// }

let isPrime = function(num) {
    if (num <= 1) return false; // Handle numbers less than or equal to 1
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check up to the square root
        if (num % i === 0) {
            return false; // Not prime if divisible
        }
    }
    return true; // It's prime
};

let choosePrimes = function(nums) {
    let answer = [];
    nums.forEach(element => {
        if (isPrime(element)) {
            answer.push(element); // Use push to add the prime number to answer
        }
    });
    return answer; // Return the collected primes
};

// Test examples
console.log(choosePrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
console.log(choosePrimes([11, 13, 14, 15, 16, 17])); // Output: [11, 13, 17]
console.log(choosePrimes([4, 6, 8, 10])); // Output: []


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
