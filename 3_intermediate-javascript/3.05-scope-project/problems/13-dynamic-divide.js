/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:




***********************************************************************/

//function takes in the divisor
//create an inner function that takes in a num
//function num / divisor

function dynamicDivide(divisor) {
  // Your code here
  return function (num) {
    return num / divisor
  }
}


const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicDivide;
} catch (e) {
  return null;
}
