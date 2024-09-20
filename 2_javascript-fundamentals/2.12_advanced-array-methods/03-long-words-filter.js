/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:



*/
let arr = ['lol', 'omg', 'brat'];
let longWord = arr.filter(function(word){
  return word.length > 3
})

console.log(longWord)


let longWords = function(words) {
    let longWord = words.filter(function(word){
      return word.length > 5
    })
    return longWord
};

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
