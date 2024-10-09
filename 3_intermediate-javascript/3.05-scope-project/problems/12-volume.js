/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.



***********************************************************************/

//return function until it gets 3 numbers
//create an array to house the three numbers, first is height
//create an inner function. it takes in a number
//pushes the number to the nums array
//if the nums array has more than 3 numbers, then it will return the product of the first 3 numbers 


function recVolume(height) {
  let nums = [height];
  return function(num) {
    nums.push(num);
    console.log(nums)
    if (nums.length >= 3) {
      product = 1;
      for (let i = 0; i <= 2; i++) {
        product *= nums[i]
      }
      return product
    }
  }

}


// // Example 1:
let table1 = recVolume(5); // returns a function

console.log(table1(4)); // returns a function

console.log()

console.log(table1(3)); // prints 60

console.log()

console.log(table1(145)); // STILL prints 60

// // Example 3:
// let table2 = recVolume(3); // returns a function
// table2(2); // returns a function
// console.log(table2(1)); // prints 6
// console.log(table2(75)); // STILL prints 6


// function outer(x) {
//   let arr = [];
//   if(x > 3) {
//   return function big() {
//     arr.push(x)
//   }
//   } else {
//     return function little(){

//     }
//   }
// }

// console.log(outer(4))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = recVolume;
} catch (e) {
  return null;
}
