/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:


***********************************************************************/

function counter(array, word) {
  count = 0;
  array.forEach(function(el) {
    if(el === word) {
      count++
    }
  })
  return count
};


function arrayConverter(array) {
  let answer = {};
  array.forEach(function(word) {
   answer[word] = counter(array,word);
  })
  return answer
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
