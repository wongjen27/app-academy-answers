// -- is prime -- //

function isPrime(number) {
    if (number<2) {
        return false
    }
    for (i=2; i<number; i++) {
        if (number%i===0) {
            return false
        }
    } return true
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true



// -- choose primes -- //

function choosePrimes(array) {
    let primes = [];
    for (let i=0; i<=array.length-1; i++) {
        let num = array[i];
        if(isPrime(num)) {
            primes = primes.concat(num);
        }
    } return primes;
}




console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]



// -- next prime -- //

// Write a function nextPrime that accepts a number as an argument.
// The function should return the nearest prime number
// that is greater than the given number.

function isPrime(number) {
    if (number<2) {
        return false
    }
    for (i=2; i<number; i++) {
        if (number%i===0) {
            return false
        }
    } return true
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false


function nextPrime(num) {
    for (let i=num+1; i>=num+1; i++) {
        if (isPrime(i)) {
            return i
        }
    }

}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101


// -- prime factors -- //

// Write a function primeFactors that accepts a number as an argument.
// The function should return an array containing
// all of the prime numbers that can divide the given number.

function isPrime(number) {
    if (number<2) {
        return false
    }
    for (i=2; i<number; i++) {
        if (number%i===0) {
            return false
        }
    } return true
}

function primeFactors(num) {
    let array = [];
    for (let i = 2; i<= num; i++) {
        if (num%i===0 && isPrime(i)) {
            array = array.concat(i)
        }
    } return array;
}



console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]



// -- is anti prime --//

// Write a function isAntiPrime that accepts a number as an argument.
// The method should return true if the given number has more divisors
// than all positive numbers less than the given number.
// For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.

function numDivisors(num) {
    let count = 0
    for(let i=1; i<=num; i++) {
        if (num%i===0) {
            count = count + 1
        }
    }return count
}

console.log(numDivisors(36))

function isAntiPrime(num) {
    for (i = 2; i <= num; i++) {
        if(numDivisors(i)>numDivisors(num)) {
            return false
        }
    } return true
}


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false


// -- most vowels -- //

// Write a function mostVowels that takes in a sentence string
// and returns the word of the sentence that contains the most vowels.

//0. create varible of vowels to use to identify vowels later on - done
//1. write a function that counts the number of vowels is in a word - done
//2. begin writing a new function that:
//2a. splits the sentence into array of words
//2b. use for loop to count the number of vowels is in each word in the array
//2c. identify the word with the most letters
//2d. return the word with the most letters



let vowels = "aeiou"
function countVowels(word) {
    let count = 0
    for (let i = 0; i <= word.length-1; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    } return count;
}

// console.log(countVowels("alligator")) // 4


// let sentence1 = "what a wonderful life"
// let sentenceSplit1 = sentence1.split(" ")

// console.log("counts")
// console.log(countVowels(sentenceSplit1[0]))
// console.log(countVowels(sentenceSplit1[0+1]))
// console.log(countVowels(sentenceSplit1[0]) > countVowels(sentenceSplit1[0+1]))
// console.log(sentenceSplit1)
// console.log(sentenceSplit1[2])
// console.log(sentenceSplit1.length-1)


function mostVowels(sentence) {
    // your code here
    let mostVowelsLoc = 0;
    let sentenceSplit = sentence.split(" ");
    for(let i = 0; i <= sentenceSplit.length-2; i++) {
        let countFirstWord = countVowels(sentenceSplit[i]);
        let countSecondWord = countVowels(sentenceSplit[i + 1]);
        if(countFirstWord > countSecondWord) {
            mostVowelsLoc = i
        } else {
            mostVowelsLoc = i+1
        }
    }
    return sentenceSplit[mostVowelsLoc]

}

console.log(mostVowels("what a wonderful life")); // "wonderful"



// -- all else equal -- //


// Write a function allElseEqual that takes in an array of numbers.
// The function should return the element of the array that is equal
// to half of the sum of all elements of the array.
// If there is no such element, the method should return null.

//1. write a function that halfs the sum of an array
function sumHalfArray(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length-1; i++) {
        sum = sum + arr[i]
    } return sum/2
}
// console.log("sumarray")
// console.log(sumHalfArray([2, 4, 3, 10, 1]))


function allElseEqual(arr) {
    let halfSum = sumHalfArray(arr); //define the target sum
    for (let i = 0; i <= arr.length-1; i++) { //start the loop to loop at each item in array
        if (halfSum === arr[i]) { //if the item equals the target sum
            return arr[i] //then return that item in the location of the array
        }
    } return null //if we can't find the target sum in the array then return null
}

console.log("test")
console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
