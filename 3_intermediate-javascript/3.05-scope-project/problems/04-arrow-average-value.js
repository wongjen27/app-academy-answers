/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:


***********************************************************************/

const arrowAvgValue = array => {
  let sum = 0;
  array.forEach(element => {
    sum = sum + element
  });
  let answer = sum / array.length;
  return answer
};

console.log(arrowAvgValue([10, 20])); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowAvgValue;
} catch (e) {
  return null;
}
