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
