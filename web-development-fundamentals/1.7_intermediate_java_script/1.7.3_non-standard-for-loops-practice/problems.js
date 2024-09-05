function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let arr2=[]
    for (i=1; i<=arr.length-1; i+=2) {
        word = arr[i];
        arr2=arr2.concat(word)
    }
    return arr2
}

console.log(oddIndices(["zero","one","two","three","four","five","six"]))

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let arr2=[]
    if(arr.length%2==0) {
        for (i=arr.length-1; i>=0; i-=2) {
            word = arr[i];
            arr2=arr2.concat(word)
    }
    } else {
    for (i=arr.length-2; i>=0; i-=2) {
        word = arr[i];
        arr2=arr2.concat(word)
    }

} return arr2
}

console.log(oddReverse(["zero","one","two","three","four","five","six"]))
console.log(oddReverse(["zero","one","two","three","four","five","six","seven"]))



function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let arr2 = []
    for (i=1; i<=arr.length-1; i*=2) {
        word = arr[i];
        arr2=arr2.concat(word)
    }
    return arr2

}

/*1,2,4,8,16...*/
console.log("secondPower");
console.log(secondPower(["zero","one","two","three","four","five","six","seven","eight","9","10","11","12","13","14","15","16","17"]))



function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here

    let arr2 = []
    for (i=1; i<=arr.length-1; i*=n) {
        word = arr[i];
        arr2=arr2.concat(word)
    }
    return arr2
}

console.log("nthpower")
console.log(nthPower(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"],2))
console.log(nthPower(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"],3))
console.log(nthPower(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"],4))


function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let arr2 = []
    for (i=0; i<arr.length/2; i++) {
        word = arr[i];
        arr2=arr2.concat(word)
    }
    return arr2
}
console.log("firstHalf");
console.log(firstHalf(["0","1","2","3","4","5"]))
console.log(firstHalf(["0","1","2","3","4"]))
console.log(firstHalf([]))


function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let arr2 = []
    for (i=arr.length/2; i<=arr.length-1; i++) {
        word = arr[i];
        arr2=arr2.concat(word)
    }
    return arr2
}
console.log("secondHalf");
console.log(secondHalf(["zero","one","two","three","four","five","six","seven","eight","9","10","11","12","13","14","15","16","17"]))
console.log(secondHalf([]))


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
