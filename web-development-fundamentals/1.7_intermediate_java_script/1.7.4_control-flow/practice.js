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
