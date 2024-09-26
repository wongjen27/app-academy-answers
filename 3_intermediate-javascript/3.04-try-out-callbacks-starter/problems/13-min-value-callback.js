/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:


*******************************************************************************/

let minValueCallback = function(arr, cb) {
    if (cb === undefined) {
        let min = arr[0];
        for (let i = 1; i <= arr.length - 1; i++) {
            if(arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    } else {
        let min = arr[0];
        for (let i = 1; i <= arr.length - 1; i++) {
            if (cb(arr[i]) < min) {
                min = cb(arr[i])
            }
        }
        return min
    }
};


console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
