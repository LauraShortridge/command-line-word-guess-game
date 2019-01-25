//Require the letter.js file with the Letter constructor
let Letter = require("./letter.js");

function Word(word) {
    //Stores the word variable
    this.word = word;
    //Creates an array for the letters in the word
    this.letterArray = [];
    //Function that pushes the letters of the word into an array
    this.initializeWord = function(word) {
        for (let i = 0; i < word.length; i ++) {
            let char = word[i]
            this.letterArray.push(new Letter(char));
        }
    }
    //Call the initializeWord function
    this.initializeWord(this.word);
    //Function that displays the word
    this.displayWord = function() {
        return this.letterArray.map(function(guessedLetter) {
            return guessedLetter.displayLetter();
        }).join(" ");
    }
    //Function that checks if the guess is correct 
    this.guess = function guess(guessedLetter) {
        for (i = 0; i < this.letterArray.length; i ++) {
            if (this.letterArray[i].check(guessedLetter)) {
                 this.displayWord()
            } 
        }
    }
    this.isGuessed = function() {
        return this.letterArray.every(function(guessedLetter) {
            return guessedLetter.isVisible
        })
    }
}

module.exports = Word;

// var testWord = new Word("swan");
// console.log(testWord.displayWord());
// console.log(testWord.guess("w"));
// console.log(testWord.displayWord());
// console.log(testWord.guess("n"));
// console.log(testWord.displayWord());