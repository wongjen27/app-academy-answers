//generated a similar problem to flatten from chatgpt

//Write a recursive function called sumNested that takes a single array containing numbers
//and/or nested arrays of numbers and returns the total sum of all the numbers, regardless of how deeply nested they are.

/*************************************/

//create an array to house the answer
//base case: if array is empty, then return 0
//recursive case: if the element is an array, then recursive until it is not. then sum to answer.
//recursive step: if the element is not an array, then sum to answer, and do sumNested(arr.slice(1))


let sumNested = arr => {
    let answer = 0;
    if (arr.length === 0) {
        return answer
    }
    if (Array.isArray(arr[0])) {
        answer = answer + sumNested(arr[0]);
    } else {
        answer = answer + arr[0]
    }

    return answer + sumNested(arr.slice(1))
}



console.log(sumNested([])); // 0
console.log(sumNested([1, 2, 3])); // 6
console.log(sumNested([1, [2, [3]]] )); // 6
console.log(sumNested([1, [2, [3, 4]], 5])); // 15
console.log(sumNested([[1, 2], [3, 4]])); // 10
