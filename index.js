//The file containing the logic for the course of the game, which depends on Word.js and:
    //Randomly selects a word and uses the Word constructor to store it
    //Prompts the user for each guess and keeps track of the user's remaining guesses

//Set number of incorrect guesses to 10
let incorrectGuess; 

//Create an array to hold the guess words
let wordArray = ["tiger", "elephant", "swan", "panda", "bear", "horse", "leopard", "monkey", "snake", "giraffe", "orangutan", "zebra"];

//Require the word.js file
let Word = require("./word.js");

let pickedWord; 
let randomWord;

//Require inquirer so we can collect a guess from the user
let inquirer = require("inquirer");

console.log("\n" + "Guess the secret word! Hint: it's an animal." + "\n");

getAWord(); 

function getAWord() {
    //Create a variable to hold a random word from the word array
    randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    // console.log(randomWord);
    pickedWord = new Word(randomWord); 
    console.log(pickedWord.displayWord() + "\n");
    incorrectGuess = 10; 
    startGuessing();
}

function startGuessing() {
    inquirer
    //Prompt the user to guess a letter
    .prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guessedLetter"
        }
    ])
    .then(letters => {
       makeGuess(letters.guessedLetter);
    });
}

function makeGuess(guessedLetter) {
    if (incorrectGuess > 1) {
        var isCorrect = pickedWord.guess(guessedLetter)
        if (isCorrect) {
            console.log ("\n" + "Correct!" + "\n");
        }
        else if (!isCorrect) {
            console.log("\n" + "Incorrect!" +  "\n");
            incorrectGuess--;
            console.log("Guesses left: " + incorrectGuess + "\n");
        };
        console.log(pickedWord.displayWord(randomWord) + "\n");
        if (pickedWord.isGuessed()) {
            winGame(); 
        } else {
            startGuessing();
        }
  } else if (incorrectGuess <= 1) {
        loseGame();
    }
  }

function loseGame() {
    console.log("\n" +"Game over!" + "\n");
    console.log("Try again!" + "\n");
    getAWord(); 
}

function winGame() {
    console.log("You have won! Congratulations!" + "\n");
    console.log("Play again!" + "\n");
    getAWord();
}


//Need to set wrong guesses to 10
//Display the word
//Ask for a letter if the word hasn't been guessed fully
    //If the guess is incorrect then 
        //decrease wrong guesses
        //console.log Incorrect, guess again
        //show the number of wrong guesses left
        //if incorrect guesses are 0 then...
            //console.log game over
            //play again and have a new word
    //If the guess is correct then 
        //console.log correct
        //fill in each instance of that letter
//If the word has been guessed, then console log, you win and present a new word