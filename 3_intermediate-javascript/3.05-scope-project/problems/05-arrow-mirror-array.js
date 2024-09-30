/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:


***********************************************************************/

const mirrorArray = (array) => {
  let answer = [].concat(array);
  for (let i = array.length - 1; i >= 0; i--) {
    let el = array[i];
    answer.push(el)
  }
  return answer
};


console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}
