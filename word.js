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
        let displayedword = '';
        for (i = 0; i < this.letterArray.length; i ++) {
            let letter = this.letterArray[i].displayLetter();
            displayedword += letter + ' '
        }
        return displayedword
    }
    //Function that checks if the guess is correct 
    this.guess = function guess(guessedLetter) {
        for (i = 0; i < this.letterArray.length; i ++) {
            let charGuessed = true; 
            if (!this.letterArray[i].check(guessedLetter)) {
                // return this.displayWord()
                charGuessed = false; 
                return charGuessed;
            } 
            return this.displayWord()
        }
        
    }
}

module.exports = Word;

// var testWord = new Word("swan");
// console.log(testWord.displayWord());
// console.log(testWord.guess("w"));
// console.log(testWord.displayWord());
// console.log(testWord.guess("n"));
// console.log(testWord.displayWord());