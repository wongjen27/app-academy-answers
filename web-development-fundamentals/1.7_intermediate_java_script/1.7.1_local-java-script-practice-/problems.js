function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    num = num/3;
    return num
};

console.log("dividbyThree");
console.log(divideByThree(16));

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    sum = num1 + num2;
    avg = (sum)/2;
    return avg
};

console.log("averageOfTwo");
console.log(averageOfTwo(6,19));

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let sum = (num1 + num2 + num3 + num4);
    let avg = sum/4;
    return avg
};

console.log("averageOfFour");
console.log(averageOfFour(4,5,19,50));



/*I did ths problem using both types of loops. Doubler uses for loop. Doubler2 uses while loop*/
function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let newArrayDoubler = []
    for (let i=0; i <= nums.length-1; i++) {
        let oldNum = nums[i];
        let newNum = nums[i] * 2;
        newArrayDoubler = newArrayDoubler.concat(newNum)
    }
    return newArrayDoubler
};

console.log("doubler")
console.log(doubler([2,3,4]));



function doubler2(nums) {
    let newArrayDoubler2=[];
    let i=0;
    while (i<=nums.length-1) {
        let oldNum = nums[i];
        let newNum = oldNum * 2;
        newArrayDoubler2 = newArrayDoubler2.concat(newNum);
        i++
    }
    return newArrayDoubler2;
    };

console.log("doubler2");
console.log(doubler2([1,1,1]));



function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
        let newArray=arr1.concat(arr2);
        return newArray;
    }
console.log("combineArrays");
console.log(combineArrays([1,2,3],[4,5,6]));


function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    ;
    if (arr.indexOf(word) >= 0 ) {
        return true
    } else {
        return false
    }

};


console.log("workWithinArray");
console.log(wordWithinArray("apple",["orange","apple"]));



function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    return str.toUpperCase()+" ... " + str + " ... " + str.toLowerCase();
};

console.log("echo");
console.log(echo("Tuna"));



/* I think the unit test in the starter had something wrong with it*/

let arr1=[]

function fizzBuzz (max) {
        /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
for (i=0; i<max; i++) {
    if(i%5==0 && i%3!==0) {
        arr1=arr1.concat(i);
    } else
    if(i%5!==0 && i%3==0) {
        arr1=arr1.concat(i);
    }
} return arr1
};
console.log("fizzBuzz");
console.log(fizzBuzz(18));

/* different way to do it */

let arr2=[]

function fizzBuzz1 (max) {
for (i=0; i<max; i++) {
    if(i%15!==0 && (i%5==0 || i%3==0) ) {
        arr2=arr2.concat(i);
    }
} return arr2
};

console.log(fizzBuzz1(50));




function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    return "Hello, " + name;
};

console.log("hello");
console.log(hello("Jennie"));



function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    return "Bye, "+name;
};

console.log("goodbye");
console.log(goodbye("Jennie"));



function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    if (num==5) {
        return true
    } else {
        return false
    }
};

console.log("isFive")
console.log(isFive(5));
console.log(isFive(6));



function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
    if (num%2==0){
        return false
    } else {
        return true
    }
};

console.log("isOdd");
console.log(isOdd(7));
console.log(isOdd(8));

/* This is done without if statements */

function isOdd2(num) {
    return num%2==0
}

console.log(isOdd2(7));
console.log(isOdd2(8));


function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    searchString = searchString.toUpperCase();
    subString = subString.toUpperCase();
    if (searchString.indexOf(subString)>=0) {
        return true
            } else {
        return false
        }
    };

console.log("isSubString");
console.log(isSubString("there are 2 dogs","dog"));
console.log(isSubString("there are 2 dogs","Dog"));
console.log(isSubString("there are 2 dogs","cat"));

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here

    let count=0;
    for (index=0; index < word.length; index++) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
    }

}return count;
};

console.log("aCounter");
console.log(aCounter("AppleAaaa"));

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
