// -- add to array research -- //

// Write a function that takes a location, either "FRONT" or "BACK"
// and adds an element to either the front or back of the given array.
// If location is anything besides "FRONT" or "BACK", print an error.
// Your function should not return anything and should mutate the original array.
// (Hint: Look up the JavaScript functions: push/pop/shift/unshift)

let arr = [0,1,2,3,4,5];
first = arr.shift()
console.log(first)
console.log(arr)

let arr1 = [0,1,2,3,4,5]
last = arr1.pop()
console.log(last)
console.log(arr1)

console.log("")
let arr2 = [0,1,2,3,4,5]
unshift = arr2.unshift(4)
console.log(unshift)
console.log(arr2)


function addToArray(location, element, arr) {
    // Your code here
    if(location === "FRONT") {
        unshift = arr.unshift(element);
    } else if(location === "BACK") {
        push = arr.push(element);
        } else {
        return console.log("ERROR")
    } return arr

}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]


// -- range -- //

// Write a function range(min, max) that takes in two numbers.
// The function should return an array containing all numbers from min to max inclusive.

// Define this function using function expression syntax.

// your code here

// let range = function(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i++) {
//         arr=arr.concat(i);
//     } return arr
// }

let range = function(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    } return arr
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []



// -- even numbers -- //

// Write a function evenNumbers(max) that takes in a number as an arg.
// The function should return an array containing all positive, even numbers that are less than max.

// Define this function using function expression syntax.

// your code here


let evenNumbers = function(num) {
    let arr = []
    for (let i = 2; i < num; i++) {
        if(i%2==0) {
            arr.push(i)
        }
    }return arr
}



console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]


// -- log between stepper recall -- //

// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
// The function should print out numbers between min and max at step intervals. See the following examples.

// Hint: this function only needs to print using console.log it does not need to return.

let logBetweenStepper = function(min, max, step) {
    for (let i = min; i <= max; i+=step) {
        console.log(i)
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15



// -- factors of -- //

// Write a function factorsOf(num) that takes in a number as an arg.
// The method should return an array containing all positive numbers that are able to divide into num with no remainder.

// Define this function using function expression syntax.

let factorsOf = function(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if(num%i===0) {
            factors.push(i)
        }
    } return factors
}



console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]



// -- fizz buzz array -- //

// Write a function fizzBuzz(max) that accepts a number as an arg.
// The function should return an array containing all positive numbers less than max
// that are divisible by either 3 or 5, but not both.


// your code here

function fizzBuzz(max) {
    let arr = [];
    for(let i = 0; i < max; i++) {
        if(!(i%15===0)&&((i%3===0||i%5===0))){
            arr.push(i)
        }
    } return arr
}


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]




// -- pit pat -- //

// Write a function pitPat(max) that accepts a number as an arg.
// The function should return an array containing all positive numbers less than or equal to max
// that are divisible by either 4 or 6, but not both.


function pitPat(max) {
    let arr = [];
    for(let i = 0; i <= max; i++) {
        if(!(i%24===0)&&((i%4===0||i%6===0))){
            arr.push(i)
        }
    } return arr
}



console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]


// -- double sequence -- //

// Write a function doubleSequence that accepts a base and a length as arguments.
// The function should return an array representing a sequence that contains "length" elements.
// The first element of the sequence is always the "base", the subsequent elements can be generated
// by doubling the previous element of the sequence.

//create an array to contain the answer
//need a for loop
//prints the start
//doubles arr[i-1]

let doubleSequence = function(start, length) {
    if(length === 0) {
        return []
    }
    let arr = [start]
    for(let i = 1; i <= length - 1; i++) {
        arr=arr.concat(arr[i-1]*2)
    } return arr
}




console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]


// -- triple sequence -- //

// Write a function tripleSequence that takes in two numbers, start and length.
// The function should return an array representing a sequence that begins with start and is length elements long.
// In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.


function tripleSequence(start, length) {
    if(length === 0) {
        return []
    }
    let arr = [start]
    for(let i = 1; i <= length - 1; i++) {
        arr=arr.concat(arr[i-1]*3)
    } return arr
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]


// -- unique -- //


// Write a function unique that accepts an array as an argument.
// The function should return a new array containing elements of the input array, without duplicates.



//create a new array
//check if each number is already in the new array
//if not then add to new array
//print new array without dupes




function unique(arr) {
    let unique = [];
    for(let i = 0; i <= arr.length-1; i++) {
        if(!unique.includes(arr[i])) {
            unique = unique.concat(arr[i])
        }
    } return unique
}


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


// -- yeller -- //

// Write a function yeller(words) that takes in an array of words.
// The function should return a new array where each element of the original array is yelled.


function yeller(arr) {
    let yelledArr = [];
    for ( let i = 0; i <= arr.length - 1; i++) {
        word = arr[i];
        upper=word.toUpperCase() + '!';
        yelledArr.push(upper);
    } return yelledArr
}


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]


// -- tripler -- //

// Write a function tripler(nums) that takes in an array as an arg.
// The function should return a new array containing three times every number of the original array.

//create a function
//create an empty array
//start a for loop that starts with 0, goes through every element of array one at a time
//for each, double
//add the doubled number to the new empty array
// return the new empty array


function tripler(arr) {
    let triples = []
    for (let i = 0; i <= arr.length - 1; i++) {
        times3 = arr[i] * 3;
        triples.push(times3)
    } return triples
}



console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


// -- long words -- //

// Write a function longWords(words) that takes in an array of words.
// The function should return an array containing only the words that are longer than 5 characters.

//create a function
//create a new array
//create a for loop that begins at 0, goes through each item in the array one at a time
//if length of the item is more than 5 then add to new array
//return new array

function longWords(arr) {
    let long = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i].length > 5) {
            long.push(arr[i])
        }
    } return long
}

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]


// -- choosey endings -- //

// Write a function chooseyEndings that accepts an array of words and a suffix string as arguments.
// The function should return a new array containing the words that end in the given suffix.
// If the value passed in is not an array, return an empty array.

// HINT: There are built in JavaScript functions that will help with determining
// if a strings ends a certain way. Go see if you can find it on MDN!

//create a new function
//create a new array that will house the answers
//start a loop that begins with the first item, and goes through the full array one at a time
//if the word ends with the ending, then add to the new array
//return the new array

let word1 = "familyj"
let ending1 = "ily"
console.log(word1.endsWith(ending1))

function chooseyEndings(arr, end) {
    answer = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if(arr[i].endsWith(end)) {
            answer.push(arr[i])
        }
    } return answer
}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]



// -- common factors -- //

// Write a function commonFactors that accepts two numbers as arguments.
// The function should return an array containing positive numbers that are able to divide both arguments.

//create a function that accepts num1 and num2
//create an array that will house the answer
//create a for loop that starts at 0 and goes to the smaller of the two numbers, one at a time
//if i divides both numbers, then push to new array
//return new array


console.log(Math.max(3,50))


function commonFactors(num1, num2) {
    answer = [];
    for (let i = 0; i <= Math.min(num1,num2); i++) {
        if(num1%i===0 && num2%i===0) {
            answer.push(i)
        }
    } return answer
}


console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]


// -- adjacent sums -- //


// Write a function adjacentSums that accepts an array of numbers as an argument.
// The function should return a new array containing the sum of each pair of elements in the input array.

//create a function
//create a new array that houses the answer
//create a for loop that starts at 0, goes for the length -2 of the array, i++
//for each, add that and the next num
//return answer array

function adjacentSums(arr) {
    let answer = [];
    for (let i = 0; i <= arr.length - 2; i++) {
        let sum = arr[i] + arr[i+1]
        answer.push(sum)
    } return answer
}


console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]


// -- fibonacci sequence -- //

// Write a function fibonacciSequence that accepts a number as an argument.
// The function should return an array representing the fibonacci sequence up to the given length.
// The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence,
// we take the sum of the previous two numbers of the sequence.

//create a function that takes a number
//if the number is 0 then []
//if the number is 1 then [1]
//else, create an array to house the answer that is [1, 1]
//create a loop that starts at i = 2, up until the number, i++
//for each, add up arr[i-2] + arr[i-1]
//add that to the answer array
//return the answer array

function fibonacciSequence(num) {
    if (num === 0) {
        return [];
    } else if (num === 1) {
        return [1];
    } else {
        let arr = [1, 1];
        for (let i = 2; i <= num - 1; i++) {
            sum = arr[i-2] + arr[i-1];
            arr.push(sum)
        } return arr
    }
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]


// -- pick primes -- //

// Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.

//create a helper function isPrime that takes an number
//start a for loop that will go from i=2, num not inclusive, i++
//if the item can be divided by a smaller number than if self, then return false
//else return true

//create a new function pick primes that will take in an array
//create a new array that will house the answers
//create a for loop that will loop from i = 0, to the length of array, i++
//use isprime to determine if each item of the array is prime
//if prime, then add to the answer array
//return the answer array

function isPrime(num) {
    if(num < 2) {
        return false
    }
    for(let i = 2; i < num; i++) {
        if(num%i===0) {
            return false
        }
    } return true
}

console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(2017));

function pickPrimes(array) {
    let answer = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if(isPrime(array[i])) {
            answer.push(array[i])
        }
    } return answer
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]


// -- greatest factor array -- //

// Write a function greatestFactorArray that takes in an array of numbers and returns a new array
// where every even number is replaced with it's greatest factor.
// A greatest factor is the largest number that divides another with no remainder.
// For example, the greatest factor of 16 is 8.
// (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).


//create a helper function that finds the greatest factor
//start a for loop that begins that the number-1 and goes backwards
//if i can evenly divide our target num then return i

//create a new function that takes in an array
//create an array to house the answer
//create a for loop that begins at 0, goes to the length of array, i++
//if the number is odd then add that number straight to the answer array
//if the number is even, then use helper function to add the greatest factor to the answer array
//return answer array

function greatestFactor(num) {
    for(let i = num-1; i > 0; i--) {
        if(num%i===0) {
            return i
        }
    }
}

console.log(greatestFactor(2017));
console.log(greatestFactor(2018));

function greatestFactorArray(array) {
    // your code here
    let answer = [];
    for(let i = 0; i <= array.length - 1; i++) {
        if(array[i]%2===0) {
            answer.push(greatestFactor(array[i]))

        } else {answer.push(array[i])}

        } return answer
}


console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]


// -- summation sequence -- //

// A number's summation is the sum of all positive numbers less than or equal to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. Write a function summationSequence that takes in two numbers: start and length. The function should return an array containing length total elements. The first number of the sequence should be the start number. At any point, to generate the next element of the sequence we take the summation of the previous element. You can assume that length is not zero.

//create a helper function that does summation of a single number
//create sum = 1
//start a for loop that begins with 2, goes to the number, one at a time
//for each, sum = sum + i
//return sum

//create a new function
//create an array answer = [start]
//create a for loop i=0; to length-2; to i++
//for each, add to the helper function answer array
//return answer array

function sumNum(num) {
    let sum = 1;
    for(let i = 2; i <= num; i++) {
        sum = sum + i;
    } return sum
}

// console.log(sumNum(6));
// console.log(sumNum(21));

function summationSequence(start, length) {
    let answer = [start];
    for (let i = 0; i <= length-2; i++) {
        answer.push(sumNum(answer[i]))
    } return answer
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
