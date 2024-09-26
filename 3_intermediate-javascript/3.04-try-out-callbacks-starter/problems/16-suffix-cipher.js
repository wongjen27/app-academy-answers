/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:


*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    let answer = [];
    let arr = sentence.split(" ");
    let suffix = Object.keys(obj);
    let values = Object.values(obj);
    for (let i = 0; i <= arr.length - 1; i++) {
        let word = arr[i];
        let modified = false;
        for (let j = 0; j <= suffix.length - 1; j++) {
            if(word.endsWith(suffix[j])) {
                let cb = values[j]
                answer.push(cb(word))
                modified = true
            }

        }
        if (!modified) {
            answer.push(word)
        }
    }
    return answer.join(" ")
};

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};



console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer



let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL


let bar = function(s) {
    return s.toLowerCase() + "...";
  };

  let foo = function(message, cb1, cb2) {
    console.log(cb1(message));
    console.log(cb2(message));
  };

  foo("Hey Programmers", bar, function(s) {
    return s.toUpperCase() + "!";
  });

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
