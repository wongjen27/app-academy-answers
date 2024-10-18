

//********* initialize readline *********/

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//********* generate a secret number *********/
let secretNumber = getRandomIntInclusive(0,100);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


//********* checks guess against secret number *********/
let checkGuess = num => {
    if (num > secretNumber) {
        console.log("Too high");
        return false
    } else if (num < secretNumber) {
        console.log("Too low");
        return false
    } else if (num === secretNumber) {
        return true
    } else {
        console.log("Uh oh. There's an issue.")
        return false
    }

}


//********* ask user to enter a guess *********/

let askGuess = () => {
    rl.question('Please guess a number ', (answer) => {
        answer = Number(answer)
        console.log(`You guessed: ${answer}`);
        if (checkGuess(answer)) {
            console.log("That is correct. You win!")
            rl.close();
        } else {
            console.log("Try again")
            askGuess();
        }
      });
}



console.log(askGuess())
