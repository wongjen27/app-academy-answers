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


// -- two dimensional sum -- //

// Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

// your code here

function twoDimensionalSum(arr) {
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++) {
        let subArray = arr[i];
        for(let j = 0; j <= subArray.length - 1; j++) {
            sum = sum + subArray[j]
        }
    } return sum
}


let arr4 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr4)); // 19

let arr5 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr5)); // 6


// -- two dimensional product -- //

// Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.

// your code here

function twoDimensionalProduct(arr) {
    let product = 1;
    for(let i = 0; i <= arr.length - 1; i++) {
        let subArray = arr[i];
        for(let j = 0; j <=subArray.length - 1; j++) {
            product = product * subArray[j]
        }
    }return product
}



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

// -- max in matrix -- //

// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.

//create a function that takes in a matrix
//create a var called largest as the first element of the matrix
//start a for loop from 0
//let subArray = matrix[i]
//start another for loop from 0
//if subArray[j] > largest then save that as largest
//return largest

function maxInMatrix(matrix) {
    let largest = matrix[0][0];
    for(let i = 0; i <= matrix.length - 1; i++) {
        let subArray = matrix[i];
        for(let j = 0; j <= subArray.length - 1; j++) {
            if(subArray[j] > largest) {
                largest = subArray[j]
            }
        }
    } return largest
  }


  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72



// -- max in sub array -- //

//i miss understood what is a column and did max in each sub array
function maxSubArray(matrix) {
    let answer = [];
    for(let i = 0; i <= matrix.length - 1; i++) {
        let subArray = matrix[i];
        let max = subArray[0];
        for(let j = 1; j <= subArray.length - 1; j++) {
            if(max < subArray[j]) {
                max = subArray[j]
            }
        }answer.push(max)
    }return answer
  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  console.log(maxSubArray(matrix)); // [21, 19, 12]


// -- max in columns -- //

// Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.


//write a function that will take in a matrix
//create a variable answer=[]
//set the height and width.
//height is number of subarrays: height = matrix.length
//width is how long each subarray is: width = matrix[0].length
//start a for loop that will go through each column starting from 0
//create a variable maxCol = matrix[0][col] this is the first of the column that other values will be compared to
//start a for loop that will go through each row of the column from 1 (bc maxCol is already 0)
//if statement to check if the next value is larger than maxCol. if so, then store as new maxCol
//push to answer
//return answer

function maxColumn(matrix) {
    let answer = [];
    const height = matrix.length;
    const width = matrix[0].length;

    for (let col = 0; col < width; col++) {
        let maxCol = matrix[0][col];
        for (let row = 0; row < height; row++) {
            if (maxCol < matrix[row][col]) {
                maxCol=matrix[row][col];
            }
        } answer.push(maxCol)
    } return answer
}
  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]
  console.log(maxColumn(matrix)); //





// -- zip -- //

// Write a function zip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

function zip(arr1, arr2) {
    let answer = [];
    for(let i = 0; i <= arr1.length - 1; i++) {
        let pair = [arr1[i],arr2[i]];
        answer.push(pair)
    } return answer
}



console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]


// -- zany zip -- //

// Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

//I used the previous exercise as a base.
//since the arrays are different lengths, we can't just blindly use arr1.length in the for loop
//I created a new variable lengthArray and took the max of the length of the 2 arrays
//but now I have to figure out how to sub null for the undefined...
//used if functions on the lengths to determine whne to sub in the nulls

function zanyZip(arr1, arr2) {
    let answer = [];
    let lengthArray = Math.max(arr1.length,arr2.length);
    for(let i = 0; i <= lengthArray - 1; i++) {
        if(arr1.length > i && arr2.length > i) {
        let pair = [arr1[i],arr2[i]];
        answer.push(pair)
        } else if(arr1.length <= i) {
                let pair = [null,arr2[i]]
                answer.push(pair)
            } else {
                let pair = [arr1[i],null]
                answer.push(pair)
            }
    } return answer
}





console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]


// -- matrix addition -- //

// A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.

// Your code here

function matrixAddition(matrix1, matrix2) {
    let answer = [];
    for(let i = 0; i <= matrix1.length - 1; i++) {
        let subArray = matrix1[i];
        let sub = [];
        for(let j = 0; j <= subArray.length - 1; j++) {
            sum = matrix1[i][j] + matrix2[i][j]
            sub.push(sum)
         } answer.push(sub)
    } return answer
}


let matrixA = [[2,5],
                [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]


// -- lucky numbers -- //

// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.

//write a helper function that finds the min of an array
//write a helper function that finds the max of an array
//begin the lucky numbers function
//create a variable answer that will house the answer. answer = []
//for loop starting with the first column and goes through
//create var subCol and subRow
//nested for loop that goes through the rows to create array for columns
//for loop that goes through to create array for the rows
//if statement to that uses the helper functions to find if any equals
//push to answer array
//return array


function arrMin(arr) {
    let min = arr[0];
    for (let i = 1; i <= arr.length - 1; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    } return min
}

console.log(arrMin([6,2,3]))

function arrMax(arr) {
    let max = arr[0];
    for (let i = 1; i <= arr.length - 1; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    } return max
}

console.log(arrMax([6,2,3]))


function luckyNumbers(matrix) {
    let answer = [];
    let height = matrix.length;
    let width = matrix[0].length;

    for (let col = 0; col < width; col++) {
        let subCol = [];
        let subRow = [];
        for (let row = 0; row < height; row++) {
            subCol.push(matrix[row][col]);
        }
        for (let row = 0; row < height; row++) {
            subRow = matrix[row];
            if (arrMin(subRow) === arrMax(subCol)) {
                answer.push(arrMin(subRow))
            }
        }
    }return answer

}


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  console.log(luckyNumbers(matrix)); // [12]

console.log()

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
