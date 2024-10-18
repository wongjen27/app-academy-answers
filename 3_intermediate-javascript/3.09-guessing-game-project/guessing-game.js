

//********* initialize readline *********/

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//********* generate a random secret number *********/
function getRandomInRange(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


//********* checks guess against secret number *********/
let secretNumber;

let checkGuess = num => {
    if (num > secretNumber) {
        console.log("Too high");
        return false
    } else if (num < secretNumber) {
        console.log("Too low");
        return false
    } else if (num === secretNumber) {
        return true
    } else {                                                                //if user didn't input a number, then this is an error.
        console.log("Uh oh. There's an issue. Please enter a number.")
        return false
    }

}


//********* ask user to enter a guess *********/

let askGuess = (turns) => {                                                 //recursion to limit the number of guesses
    if (turns === 0) {                                                      //base case
        console.log("Out of turns, you lost.")
        rl.close();
    } else {                                                                //recursive case
        rl.question('Please guess a number ', (answer) => {
            answer = Number(answer)
            console.log(`You guessed: ${answer}`);
            if (checkGuess(answer)) {
                console.log("That is correct. You win!")
                rl.close();
            } else {
                turns = turns - 1                                           //recursive step
                console.log(`Try again. You have ${turns} turn left`)
                askGuess(turns);                                            //if the guess is wrong, then call function again for another guess
            }
        });
    }
}


//********* ask user to give a range *********/

let askRange = (turns) => {
    rl.question('Enter a min number: ', (min) => {
        rl.question('enter a max number: ', (max) => {
            console.log(`Guess a number between ${min} and ${max}`)
            secretNumber = getRandomInRange(Number(min), Number(max))
            askGuess(turns)
        })
    })
}

//********* ask user to give a turn limit *********/

let askLimit = (turns) => {
    rl.question('How many guesses do you need to guess the right number? ', (turns) => {
        askRange(turns)
    })
}


//readline is async so we have to chain. askLimit -> askRange -> askGuess -> checkGuess
askLimit(5);
