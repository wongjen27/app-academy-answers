// -- array indexOf -- //

//testing how indexOf works
let array = ["apple", "banana", "caramel"]
let word = "banana"

console.log(array.indexOf(word))

//applying indexOf

function wordWithinArray(array, word) {
    // your code here...
    if (array.indexOf(word)>=0) {
        return true
    } else {
        return false
    }
};

//testing if it works

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false


// -- first and last -- //

// Write a function firstAndLast that takes in an array of numbers
// and returns the sum of the first and last element if there is an even number of elements in the array.
// If there is an odd number of elements in the array, then the function should return
// the difference between the first and last elements of the array.

//test array.length

let array3 = [1,2,3,4];
console.log(array3.length)

//writing the function

function firstAndLast(array) {
    if (array.length%2===0) {
        let sum = array[0] + array[array.length-1]
        return sum
    } else {
        let diff = array[0] - array[array.length-1]
        return diff
    }
}

//testing out on examples

console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4


// -- add arrays -- //

let array1 = [1,2]
let array2 = [8,9]
console.log(array.concat(array1,array2))

function combineArray(array1, array2) {
    // your code here...
    return array1.concat(array2)
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


// -- three increasing -- //

//testing out
let array7 = [3, 2, 11, 12, 13, 2, 4]
let i = 2
console.log(array7[i+2]-array[i+1])
console.log(array7[i+1]-array[i])

//writing function
function threeIncreasing(array) {
    for (i=0; i<=array.length-1; i++) {
        if ((array[i+2]-array[i+1]===1) && (array[i+1]-array[i]===1)) {
            return true
        }
    }return false
}

//testing examples
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false





// -- My includes -- //

// Write a function myIncludes(arr, target) that accepts an array and a target value as args.
// The function should return a boolean indicating whether the target is found in the array.
// Solve this without Array.includes or Array.indexOf.


function myIncludes(array, target) {
    for (i=0; i<=array.length-1; i++) {
        if(array[i]===target) {
            return true
        }
    } return false
}



console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false



// -- my index -- //


// Write a function myIndexOf(arr, target) that takes in an array and target value as args.
// The function should return the first index where the target is found in the array.
// If the target is not found, it should return -1. Solve this without using Array.indexOf.

function myIndexOf(array, target) {
    for (i=0; i<=array.length-1; i++) {
        if (array[i]===target) {
            return i
        }
    } return -1
}


console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


// -- sum array -- //

function sumArray(array) {
    // your code here...
    let sum = 0
    for (i=0; i<=array.length-1; i++) {
        sum = sum + array[i]
    } return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


// -- product array -- //

function productWithReduce(array) {
    let product = array[0]
    for (i=1; i<=array.length-1; i++) {
        product = product * array[i]
    } return product
}



console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12


// -- double array -- //

function doubler(numbers) {
    // your code here...
    let doubleArr = [];
    for (i=0; i<=numbers.length-1; i++) {
        double = numbers[i] * 2
        doubleArr = doubleArr.concat(double)
    } return doubleArr
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
