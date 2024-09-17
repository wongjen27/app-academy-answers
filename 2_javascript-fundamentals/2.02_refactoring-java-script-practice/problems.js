/*
    Original:
    Write a function `plusFive` that takes in a number as an argument and
    returns the sum of that number and 5.

    New:
    Write a function `plusTen` that takes in a number as an argument and
    returns the sum of that number and 10.
*/
function plusFive(num) {
    return num + 5;
}

console.log("plusFive");
console.log(plusFive(5));

function plusTen(num) {
    return num + 10
}

console.log("plusTen");
console.log(plusTen(5));

/*
    Original:
    Write a function `printFives(max)` that prints out the multiples of 5 that
    are less than max.

    New:
    Write a function `returnSevens(max)` that returns an array that contains
    multiples of 7 that are less than max.
*/
function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}


console.log("printFives");
console.log(printFives(30));


function returnSevens(max) {
    let arr= []
    for (let i = 0; i <= max-1; i++) {
        if (i % 7 === 0) {
            arr=arr.concat(i);
        }
    } return arr
}

console.log("returnSevens");
console.log(returnSevens(21));



/*
    Original:
    Write a function named `eitherStringIncluded(sentence, word1, word2)` that
    accepts a sentence and two words as arguments. The `eitherStringIncluded`
    function should return `true` if *either* `word1` or `word2` is found in
    the sentence, and `false` if neither is found.

    New:
    Write a function named `bothStringsIncluded(sentence, word1, word2)` that
    accepts a sentence and two words as arguments. The `bothStringsIncluded`
    function should return `true` if *both* `word1` and `word2` are found in
    the sentence, and `false` if neither or only 1 is found.
*/
function eitherStringIncluded(sentence, word1, word2) {
    return sentence.includes(word1) || sentence.includes(word2);
}

console.log("eitherStringIncluded");
console.log(eitherStringIncluded("fox and socks", "fox","apple"));

function bothStringsIncluded(sentence, word1, word2) {
    return sentence.includes(word1) && sentence.includes(word2);
}

console.log("bothStringIncluded");
console.log(bothStringsIncluded("fox and socks", "fox","apple"));
console.log(bothStringsIncluded("fox and socks", "fox","sock"));


/*
    Original:
    Write a function `sumArray(arr)` that takes in an array of numbers and
    returns the total sum of all the numbers.

    New:
    Write a function `productArray(arr)` that takes in an array of numbers and
    returns the product of all the numbers. The product of an array  is the number
    you get when you multiply all the numbers together.
*/
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("sumArray");
console.log(sumArray([6,7,8]));

function productArray(arr) {
    let product = arr[0];
    for (let i = 1; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
}

console.log("productArray");
console.log(productArray([6,7,8]));


/*
    Original:
    Write a function `threeOrSeven` that takes in a number and returns `true`
    if the number is divisible by either 3 or 7 and `false` otherwise.

    New:
    Write a function `fiveAndEleven` that takes in a number and returns `true`
    if the number is divisible by BOTH 5 and 11 and `false` otherwise.
*/
function threeOrSeven(num) {
    return num % 3 === 0 || num % 7 === 0;
}

console.log("threeOrSeven");
console.log(threeOrSeven(30));


function fiveAndEleven(num) {
    return num % 5 === 0 && num % 11 === 0;
}

console.log("fiveAndEleven");
console.log(fiveAndEleven(56));


/*
    Original:
    Write a function, `countVowels(word)`, that takes in a string word and
    returns the number of vowels in the word.

    New:
    Write a function, `countConsonants(word)`, that takes in a string word and
    returns the number of consonants in the word.
*/
function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return count;
}

console.log("countVowels");
console.log(countVowels("alligator"));


function countConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u", " "];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return word.length - count;
}


console.log("countConsonants");
console.log(countConsonants("alligator"));

/*
    Original:
    Write a function `whisper` that takes in a string and returns a "whispered"
    version of that string. Use the `.toLowerCase()` function on a string to
    see what it does!

    New:
    Write a function `alternatingLetters` that takes in a string and returns a
    version of that string where letters alternate uppercase and lowercase,
    starting with lowercase. Do not make exceptions for spaces within the
    string.

    Strings are immutable, so here are some tools you may find useful. The
    `.split('')` function on strings to make a copy of the string as an array.
    The `.join('')` function joins the elements in an array into a string.
*/
function whisper(str) {
    return str.toLowerCase();
}

console.log("whisper");
console.log(whisper("tuna"));


console.log("alternatingLetters");

function alternatingLetters(str) {
    let wordSplit=str.toLowerCase().split("");
    let arr=[];
    for (i=0; i<=str.length-1; i++) {
        if (i%2==0) {
            let letter = wordSplit[i];
            arr=arr.concat(letter);
        } else {
            let letter2 = wordSplit[i];
            let upperLetter2=letter2.toUpperCase();
            arr=arr.concat(upperLetter2);
        }
    }return arr.join('')
}

console.log(alternatingLetters("p o llll"));

module.exports = {
    plusTen,
    returnSevens,
    bothStringsIncluded,
    productArray,
    fiveAndEleven,
    countConsonants,
    alternatingLetters
}
