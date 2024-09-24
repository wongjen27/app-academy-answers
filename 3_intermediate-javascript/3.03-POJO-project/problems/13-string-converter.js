/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:


***********************************************************************/

function counter(array, letter) {
  let count = 0;
  array.forEach(function(el) {
    if(el === letter) {
      count++
    }
  })
  return count
};

function stringConverter(string) {
  let answer = {};
  let array = string.split("")
  array.forEach(function(letter) {
    answer[letter] = counter(array,letter);
   })
   return answer
}



console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
