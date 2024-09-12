// -- has double letter -- //

// Write a function hasDoubleLetter(str) that accepts a string.
// The function should return a boolean indicating whether the string
// contains two of the same character consecutively.
// If the value passed into the function is not a string, return null.


function hasDoubleLetter(value) {
    if (typeof value === "string") {
        for (let i = 0; i <= value.length-1; i++) {
            if (value[i] === value[i+1]) {
                 return true
            }
        } return false
    } return null
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null


// -- first vowel -- //

// Write a function firstVowel(str) that takes in a string and returns
// the first vowel that appears sequentially in the string.
// If the string does not contain a vowel, return null.


let vowel = "aeiou";

function firstVowel(value) {
    for (i=0; i<=value.length-1; i++) {
        if(vowel.includes(value[i])) {
            return value[i]
        }
    } return null
}


console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null



// -- last vowel -- //

// Write a function lastVowel(str) that takes in a string and returns
// the last vowel that appears sequentially in the string.
// Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase()
// or String.toUpperCase() methods useful.

let word = "battery"
console.log(word.toUpperCase())


function lastVowel(str) {
    let vowels = "AEIOU";
    let upperStr = str.toUpperCase();
    for (i=str.length-1; i>0; i--) {
        if(vowels.includes(upperStr[i])) {
            return str[i]
        }
    } return null
}



console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null


// -- avg val -- //

// Write a function avgVal(arr) that accepts an array as an arg.
// The function should return the average of all values in the array.
// If the array is empty, it should return null.


function avgVal(arr) {
    if (arr.length === 0) {
        return null
    }
    let sum = 0
    for (i=0; i<=arr.length-1; i++) {
        sum = sum + arr[i]
    } return sum/(arr.length)
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null



// -- max value -- //

// Write a function maxValue(nums) that takes in an array of numbers as an arg.
// The function should return the largest number of the array.
// If the array is empty, the function should return null.

function maxValue(nums) {
    let largest = nums[0]
    if(nums.length === 0) {
        return null
    }
    for (let i=1; i<=nums.length-1; i++) {
        if(largest < nums[i]) {
            largest = nums[i]
        } largest
    } return largest
}


console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null


// -- reverb -- //

// Write a function reverb that accepts a word as an argument.
// The function should return a new word where all letters that come after
// the last vowel (including the vowel itself) are repeated at the end of the word.
// If the value passed in is not a string, say someone passes in a number as an argument, then return null.



function reverb(str) {
    let vowels = "AEIOUaeiou";
    let newWord = "";
    if(typeof str !== "string") {
        return null;
    }
    for (let i=str.length-1; i>=0; i--) {
        if(vowels.includes(str[i])) {
            return newWord = str + str.substring(i,str.length)
        }
    }
    return str
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null


// -- prev prime -- //

// Write a function prevPrime that accepts a number as an argument.
// The function should return the nearest prime number that is smaller than the given argument.
// Since 2 is the smallest prime number, return null if no number can be returned.

// Your code here

function isPrime(num) {
    for (let i=2; i<num; i++) {
        if(num%i===0) {
            return false
        }
    } return true
}


function prevPrime(num) {
    for (let i=1; i<=num-2; i++) {
        if(isPrime(num-i)) {
            return num-i
        }
    } return null;
}


console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null
