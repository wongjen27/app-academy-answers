// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

// Vowels are the letters "a", "e", "i", "o", "u".


function countVowels(word) {
    // your code here...
    let count = 0
    for (i=0; i<=word.length-1; i++) {
        if (word[i]=="a" || word[i]=="e" ||word[i]=="i" ||word[i]=="o" ||word[i]=="u" ) {
            count = count + 1
        }
    } return count
  };

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2



// pig latin

  function pigLatinWord(word) {
    // your code here...
    let vowel = "aeiou"
    for (i=0; i<=word.length-1; i++) {
        if(vowel.includes(word[i])) {
            let part1 = word.slice(i,word.length);
                if (vowel.includes(word[0])) {
                     return part1 + "yay"
                } else {
                    return part1 + word.slice(0,i) + "ay"
                }
        }
    }
  };

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"


//abbreviate

function abbreviate(word) {
  word = word.toLowerCase()
  let vowels = "aeiou"
  let arr = []
  for (i=0; i<word.length; i++) {
      if (vowels.includes(word[i])) {

      } else {
          arr = arr.concat(word[i])
      }
  } return arr.join('')
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'


//uncompress

function uncompress(str) {
  //assume that it will always be every other for letter number letter number
  //find the first number in the string
  //print the letter before it that many times
  //find the next number in the string
  //pring that letter before it that many times
  //so on
  let answer = ""
  for (i=0; i<=str.length-1; i++) {
      if(Number.isInteger(Number(str[i]))) {
          newSection = str[i-1].repeat(Number(str[i]));
          answer = answer + newSection
      }
  } return answer
}


console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


//triplet true

// Your code here
//check if the first character equals the second AND if the first character equals the third
//if true then return true
//if false, then check the second character and so on


function tripletTrue(str) {
  for (i=0; i<=str.length-1; i++) {
      if (str[i] == str[i+1]&& str[i] == str[i+2]) {
          return true
      }
  }return false
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false


//has three vowels//

function hasThreeVowels(str) {
  let count = 0;
  let vowels = 'aeiou';
  let uniqueVowels = "";
  for (i=0; i<=str.length-1; i++) {
      if (vowels.includes(str[i]) &&
  !uniqueVowels.includes(str[i])) {
          uniqueVowels += str[i];
          count++
      }
  } return count>=3
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


//last index//
function lastIndex(str, char) {
  // your code here
  for (i=str.length-1; i>0; i--) {
      if (str[i]===char) {
          return i
      }
  }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7


//double letter count//
function doubleLetterCount(string) {
  let count = 0;
  for (i=0; i<=string.length-1; i++) {
      if(string[i]===string[i+1]){
          count += 1
      }
  }return count
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
console.log(doubleLetterCount("bookkeepper")); // 1


//caesar cipher//

function caesarCipher(string, num) {
  // your code here
  let newWord="";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (i=0; i<=string.length-1; i++) {
      if (alphabet.indexOf(string[i])+num<=26) {
      newWord=newWord+ alphabet[alphabet.indexOf(string[i])+num]
      } else {
          newWord=newWord+ alphabet[(alphabet.indexOf(string[i])+num)-26]
      }
  }return newWord
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"



//vowel cipher//
function vowelCipher(string) {
  // your code here
  let vowels="aeiou";
  let newWord=""
  for (i=0; i<=string.length-1; i++) {
      if(string[i]==="u") {
          newWord=newWord+"a"
      } else if(vowels.includes(string[i])) {
          newWord=newWord+vowels[vowels.indexOf(string[i])+1]
      } else {
          newWord=newWord+string[i]
      }
  } return newWord
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"


//longet name//
function longestName(names) {

  // Set the first name to be the longest
  let currentLongest = names[0];

  // Check each other name in the array starting from the second
  for (let i=1; i<=names.length-1; i++) {

      // If the name we're checking is longer than our
      // current longest, set that name to be the new longest
      if (names[i].length > currentLongest.length) {
          currentLongest = names[i];
      }

  }

  return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
           "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
           "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"
