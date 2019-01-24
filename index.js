//The file containing the logic for the course of the game, which depends on Word.js and:
    //Randomly selects a word and uses the Word constructor to store it
    //Prompts the user for each guess and keeps track of the user's remaining guesses

//Set number of incorrect guesses to 10
let incorrectGuess = 10; 

//Create an array to hold the guess words
let wordArray = ["tiger", "elephant", "swan"];

//Create a variable to hold a random word from the word array
let randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];

console.log(randomWord);

//Require the word.js file
let Word = require("./word.js");

let pickedWord = new Word(randomWord); 

console.log(pickedWord.displayWord());

//Require inquirer so we can collect a guess from the user
let inquirer = require("inquirer");



getALetter();

// function play() {
//     for (let i = 0; i < pickedWord.length; i ++) {
//         getALetter(); 
//     }
// }

//start game
    //define incorrect guesses
    //call a new word

// pickAWord(); 

// function pickAWord() {
//     let randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
//     console.log(randomWord);
//     let pickedWord = new Word(randomWord); 
// }

// function makeGuess() {
//     let incorrectGuess = 10; 
//     let displayChar = 0;
//     getALetter().then(function() {
//         if (displayChar < pickedWord.length) {

//         }
//     })
//     //if incorrectGuess is 0 then 
    
// }

function getALetter() {
    inquirer
    //Prompt the user to guess a letter
    .prompt([
        {
           type: "input",
           message: "Guess a letter!",
           name: "guessedLetter"
        }
    ])
    .then(answers => {
        console.log(answers.guessedLetter);
        pickedWord.guess(answers.guessedLetter);
        console.log(pickedWord.displayWord()); 
        getALetter();
        // if (guessedLetter === letter) {
        //     console.log("Correct!")
        //     Word(); 
        // } else {
        //     console.log("Incorrect. Try again!");
        //     incorrectGuess--;
        // }

    });
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