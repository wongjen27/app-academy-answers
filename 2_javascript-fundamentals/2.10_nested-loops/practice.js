// -- pairs maker -- //

// Write a function pairsMaker(arr) that takes in a an array as an argument.
// The function should return a 2D array where the subarrays represent unique pairs of element from the input array.

function pairsMaker(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let pair = [arr[i],arr[j]];
            answer.push(pair)
        }
    }return answer
}



console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
    // [ [ 'a', 'b' ],
    //   [ 'a', 'c' ],
    //   [ 'a', 'd' ],
    //   [ 'b', 'c' ],
    //   [ 'b', 'd' ],
    //   [ 'c', 'd' ] ]

    console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
    // [ [ 'Rosemary', 'Alex' ],
    //   [ 'Rosemary', 'Connor' ],
    //   [ 'Alex', 'Connor' ] ]


// -- two sum -- //

// Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.


//create a function that takes in an array and a num
//create a variable pairSums =[]
//create a loop that begins with 0 goes through the array
//create a second loop that begins at i+1 and goes through the array
//sum the pairs
//push to pairSums =[]
//create a for loop that sees if the sum equal the target num

function twoSum(arr, num) {
    let pairSums = [];
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            pairSums.push(sum);
            for(let z = 0; z <= pairSums.length - 1; z++) {
                if(sum === num) {
                    return true
                }
            }
        }
    }return false
}



console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false


// -- pair product -- //

// Write a function pairProduct that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.

//write a function that takes in an array and a num
//start a for loop that begins at 0 and goes through the array
//start another for loop that begins at j + 1 and goes through the array
//multiply arr[i] and arr[j]
//do an if statement if the product equals the target number then return true
//else return false at the end

function pairProduct(arr, num){
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1 ; j++) {
            let product = arr[i] * arr[j];
            if(product === num) {
                return true
            }
        }
    } return false
}




console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false


// -- strange sums -- //

// Write a function strangeSums that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

//write a function that takes in an array
//create a var count = 0
//start a loop that begins at 0 and goes through the array
//start another loop that begins at i + 1 and goes through the array
//if sum === 0 then at to count
//return count


function strangeSums(arr) {
    let count = 0
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            let sum = arr[i] + arr[j];
            if(sum === 0) {
                count++
            }
        }
    }return count
}


console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0
