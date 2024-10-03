// Write a recursive function called fruitInBasket that takes an array of fruits and a specific fruit to search for.
// The function should return true if the specified fruit is found in the array, and false if it is not.


function fruitInBasket (arr, fruit) {
    if (arr.length === 0) {
        return false
    } else
    if (fruit === arr[0]) {
        return true
    } else {
        return fruitInBasket(arr.splice(1), fruit)
    }
}


console.log(fruitInBasket(['apple', 'banana', 'orange'], 'banana')); // true
console.log(fruitInBasket(['kiwi', 'mango', 'pineapple'], 'grape')); // false
console.log(fruitInBasket(['blueberry', 'raspberry', 'blackberry'], 'raspberry')); // true
console.log(fruitInBasket(['strawberry'], 'strawberry')); // true
console.log(fruitInBasket([], 'melon')); // false
