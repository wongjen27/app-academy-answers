// -- remove from array research -- //

// Write a function that takes a location, either "FRONT" or "BACK" and removes the element at either the front or back of the given array. If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. (Hint: Look up the JavaScript functions: push/pop/shift/unshift)


// let array = [0,1,2,3,4]
// //shift removes from front
// console.log(array.shift())
// console.log(array)
// //pop removes from behind
// console.log(array.pop())
// console.log(array)

//create a function
//if the location is front then use shift
//if the location is back then use pop
//else console.log error

function removeFromArray(location, arr) {
    // Your code here
    if(location == "FRONT") {
        arr.shift()
    } else if(location == "BACK") {
        arr.pop()
    } else {return console.log("ERROR")

    }return arr

    }


testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]


// -- popper -- //

// Write a function popper(array, num) that takes in an array and a number as args. The function should remove the last num elements from the array, mutating the original array. The function should return a new array containing the elements that were removed.

// Define this function using function expression syntax.

//create a function
//create a new array pop that will house the removed letters
//start a for loop
//for each, use pop and push to new array
//return new array

let popper = function(array, num) {
    let removed = [];
    for(let i = 0; i < num; i++) {
        removedWord = array.pop();
        removed.push(removedWord)
    } return removed

}


let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]


// -- rotate right -- //

// Write a function rotateRight(array, num) that takes in an array and a number as args. The function should return a new array where the elements of the array are rotated to the right num times. The function should not mutate the original array and instead return a new array.

// Define this function using function expression syntax.

// HINT: you can use Array's slice() method to create a copy of an array

// let arr1 = [0,1,2,3]
// let arr2 = arr1.slice()
// console.log(arr1)
// console.log(arr2)
// let pop = arr2.pop()
// console.log(pop)
// console.log(arr2.unshift(pop))
// console.log(arr2)

//use slice to copy the original array to work with
//start a loop that begins at 0, goes num times, i++
//use pop to take the end and use unshift put to the beginning of the copied array, not the original array
//return the copied array
//original array should remain the same

let rotateRight = function(array, num) {
    let copy = array.slice();
    for(let i = 0; i < num; i++) {
        let removed = copy.pop();
        copy.unshift(removed);
    } return copy
}


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals2 = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals2, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals2); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]


// -- rotate -- //

// Write a function rotate(array, num) that takes in an array and a number as args. When the num is positive, the elements of the array should be rotated to the right. When the num is negative, the elements of the array should be rotated to the left. The function should mutate the original array.

// Define this function using function expression syntax.


//mutate the original array
//create a function that takes in arr and num
//start a loop that begins at 0 and goes to the absolute value of num, i++
//if num > 0, then use pop to remove the last and use unshift to add to the beginning
//else, then use shift and then push
//return the original array



let rotate = function(arr, num) {
    let absNum = Math.abs(num);
    for(let i = 0; i<absNum; i++) {
        if(num > 0) {
            let removed = arr.pop();
            arr.unshift(removed)
        } else {
            let removed = arr.shift();
            arr.push(removed)
        }
    } return arr
}




let arr3 = ['a', 'b', 'c', 'd', 'e'];
rotate(arr3, 2);
console.log(arr3); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals3 = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals3, -1);
console.log(animals3); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


// -- initials -- //

// Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.


//write a function that accepts a name as an arg
//create a new array answers = []
//use split to turn the name into an array where each word is an element
//use for loop to begin at the first element and run through each
//take the first character of the word and add it to the answers array
//join the array
//upper case the string


let initials = function(name) {
    let answers = [];
    let arr = name.split(" ");
    for(let i = 0; i <= arr.length - 1; i++) {
        let word = arr[i];
        let letter = word[0];
        answers.push(letter);
    }
    let answer1 = answers.join("");
    return answer1.toUpperCase()

}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'


// -- longest word -- //

// Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances.


//create a function that takes a sentence string as arg
//use split to convert each word to elements in an array
//create a var called longest and set to 0
//create a var called position and set to 0
//use a for loop starting from 0 to the end of the array i++
//compare longest with the length of the element
//if longer, then save as new longest and save the i to var position
//return the element in that position of the array

let longestWord = function(sentence) {
    let arr = sentence.split(" ");
    let longest = 0;
    let position = 0;
    for(let i = 0; i <= arr.length-1; i++) {
        if(longest < arr[i].length) {
            longest = arr[i].length;
            position = i
        }
    } return arr[position]
}


console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''


// -- shortest word -- //

// Write a function shortestWord that accepts a sentence as an argument. The function should return the shortest word in the sentence. If there is a tie, return the word that appears later in the sentence.

//create a function that takes a sentence string as arg
//use split to convert each word to elements in an array
//create a var called shortest and it is the frist word
//use a for loop starting from 1 to the end of the array i++
//shortest with word i
//if shorter, then save as new shortest and save the i to var position
//return the element in that position of the array

let shortestWord = function(sentence) {
    let arr = sentence.split(" ");
    let shortest = arr[0];
    for(let i = 1; i <= arr.length-1; i++) {
        if(shortest.length >= arr[i].length) {
            shortest = arr[i]
        }
    } return shortest
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'




// -- reverse sentence -- //

// Write a function reverseSentence(sentence) that takes in a sentence as an arg.
// The function should return a new sentence where the order of the words is reversed.
// Note that you should reverse the order among words, not the order among characters.

//create a function that takes a sentence as arg
//use split to convert the sentence to array of words
//create a new var answer = []
//use loop that start from the last element and goes backwards to the beginning
//push each word to the answer array
//return answer array joined " "


let reverseSentence = function(sentence) {
    let arr = sentence.split(" ");
    let answer = [];
    for(let i = arr.length-1; i >= 0; i--) {
        let word = arr[i];
        answer.push(word);
    }
    return answer.join(" ");

}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'






// -- contains word -- //

// Write a function containsWord(sentence, targetWord) that accepts two strings as args. The function should return a boolean indicating whether the targetWord is found inside of the sentence. Solve this without using String's indexOf() or includes() methods.

//create a function that takes a sentence and a target word as arg
//use split to split the sentence into elements of an array
//make it all uppercase
//for loop from i = 0 to the length of the array i++
//if the element === target word then return true
//else return false


let containsWord = function(sentence, targetWord) {
    arr = sentence.toUpperCase().split(" ");
    targetWord = targetWord.toUpperCase();
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i]===targetWord) {
            return true
        }
    } return false
}



console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false


// -- abbreviate words -- //

// Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.

//create a helper function to remove vowels from a word
//create a variable vowels = "aeiouAEIOU"
//create a variable new word as string
//use a loop to go through each letter of the word
//if the letter is not incldued in vowels, then push to new word
//return new word

//create a function abbreviateWords that takes in a sentence
//use split to convert the sentence to an array with words
//create a variable answer = []
//use a for loop that goes through each element of the array
//if the length of the element is less than 4, then push to answers
//else, use helper function removevowels and then push to answers
//return answers.join(" ")

let removeVowels = function(word) {
    let vowels = "aeiouAEIOU";
    let newWord = ""
    for(let i = 0; i <= word.length - 1; i++) {
        if(!vowels.includes(word[i])) {
            newWord = newWord.concat(word[i])
        }
    } return newWord
}

console.log(removeVowels("kaaaaaaaal"))

let abbreviateWords = function(sentence) {
    let arr = sentence.split(" ");
    let answer = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        if(arr[i].length <= 4) {
            answer = answer.concat(arr[i]);
        } else {
            answer = answer.concat(removeVowels(arr[i]));
        }
    } return answer.join(" ")
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg



// -- snack to camel -- //

// Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string. snake_case is where each word is separated with underscores (_). PascalCase is a string where the first char of each word is capital, all other chars lowercase.

//create a function that takes a str
//change it all to lowercase
//split by "_"
//create a new variable answer = []
//create a loop that starts with the first element of the array and goes through it all
//for each element, capitlize the first letter
//push to answer
//return answer.join()

let str3 = "word";
console.log(str3.substring(1,str3.length))



let snakeToCamel = function(str) {
    str = str.toLowerCase();
    arr = str.split("_");
    let answer = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        let word = arr[i];
        let letter = word[0].toUpperCase();
        let camel = letter + word.substring(1,word.length);
        answer.push(camel);
    } return answer.join("")
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'


// -- hisperfy -- //

// Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

//create a helper function that removes the last vowel of a word
//the function takes in a word
//create a var answer = ""
//create a var vowels = "aeiouAEIOU"
//create a for loop that goes through each letter of the word, backwards
//if the letter is !vowel then push to answer
//return answer

//create a function that takes in a str as arg
//create a var answer = []
//split the sentence into an array of words
//use a loop to go through each element of the

let removeLV = function(word) {
    let notVowels = "";
    let vowels = "aeiouAEIOU";
    for(let i = word.length-1; i >= 0; i--) {
        if(vowels.includes(word[i])) {
        return word.substring(0,i) + word.substring(i+1,word.length)
}
}
}

console.log(removeLV("bootcamp"));
console.log(removeLV("everyone"));

let hipsterfy = function(str) {
    let answer = [];
    let arr = str.split(" ");
    for(let i = 0; i <= arr.length - 1; i++) {
        let newWord = removeLV(arr[i]);
        answer = answer.concat(newWord)
    } return answer.join(" ")
}



console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'


// -- repeat translate -- //

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here

//write a helper functin that finds the last vowel and print the rest of the word
//helper function takes a word as arg
//let vowels = "aeiouAEIOU"
//let answer = ""
//loop that goes through the letters in a word backwards
//if the letter is a vowel then word + word[i,word.length-1]

//write a function that takes in a sentence
//split the sentence into an array of words
//let arr = []
//if the word.length < 3 then push to arr
//else if, ends with a vowel then word+word and push to arr
//else use helper function

let repeat = function(word) {
    let vowels = "aeiouAEIOU";
    for(let i = word.length-1; i >= 0; i--) {
        if(vowels.includes(word[i])) {
            return word+word.substr(i,word.length-1)
        }
    }
}

console.log(repeat("trash"))



let repeatingTranslate = function(sentence) {
    let arr = sentence.split(" ");
    let vowels = "aeiouAEIOU";
    let answer = [];
    for(let i = 0; i <= arr.length - 1; i++) {
        let word = arr[i];
        if(word.length < 3) {
            answer.push(word)
        } else if(vowels.includes(word[word.length-1])) {
            answer.push(word+word)
        } else {
            answer.push(repeat(word))
        }
} return answer.join(" ")
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"


// -- consonant cancel -- //

// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

//use a helper function
//create a var of vowels
//create a loop that goes through each element
//check if the letter is a vowel
//if true, then push word.substring(i,word.length-1)

//write a function that takes in a sentence
//split the words of the sentence into an array of words
//create a new array for answer


function alter(word) {
    let vowels = "aeiouAEIOU";
    for(let i = 0; i <= word.length-1; i++) {
        if(vowels.includes(word[i])) {
            return word.substring(i,word.length)
        }
    }
}

console.log(alter("writing"))

function consonantCancel(sentence) {
    let arr = sentence.split(" ");
    let answer = [];
    for(let i = 0; i <= arr.length-1; i++) {
        let word = arr[i]
        answer.push(alter(word))
    } return answer.join(" ")
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
