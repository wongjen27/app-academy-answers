/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/

function reverse(string) {
  let arr = string.split("");
  let answer = [];
  if (arr.length > 0) {
    answer.push(arr.pop())
    return answer.concat(reverse(arr.join(""))).join("")
  }
  return ""
}


console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""




/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
