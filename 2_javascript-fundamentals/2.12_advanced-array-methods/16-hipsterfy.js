/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:
*/





let removeLastVowel = function(word) {
    let vowel = "AEIOUaeiou";
    const length = word.length;
    let answer = [];
    for (let i = length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.substring(0,i) + word.substring(i+1,length + 4)
        }
    }
};

let word = "upp"
console.log(word.split(""))
console.log(word.substring(1,2))
console.log(removeLastVowel("up"))

let hipsterfy = function(sentence) {
    let arr = sentence.split(" ");
    let answer = [];
    arr.forEach(function(word) {
        answer.push(removeLastVowel(word))
    })
    return answer.join(" ")
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
