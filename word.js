//Contains a constructor, Word that depends on the Letter constructor. This is used to create an object 
//representing the current word the user is attempting to guess. That means the constructor should define:

//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each 
//letter object (the first function defined in Letter.js) that displays the character or an underscore and 
//concatenate those together.
//A function that takes a character as an argument and calls the guess function on each 
//letter object (the second function defined in Letter.js)

let Letter = require("./letter.js");

function Word(word) {
    this.word = word
    this.letterArray = [];
    this.initializeWord = function(word) {
        for (let i = 0; i < word.length; i ++) {
            let char = word[i]
            this.letterArray.push(new Letter(char));
        }
    }
    this.initializeWord(this.word);
    this.displayWord = function () {
        let displayedword = '';
        let count = 0; 
        for (i = 0; i < this.letterArray.length; i ++) {
            let letter = this.letterArray[i].displayLetter()
            if (count < this.letterArray.length) {
                
            }
            displayedword += letter + ' '
        }
        return displayedword
    }
    this.guess = function guess(guessedLetter) {
        for (i = 0; i < this.letterArray.length; i ++) {
            if (this.letterArray[i].check(guessedLetter)) {
                return this.displayWord()
            } else {
                console.log("Incorrect guess!");
            }
        }
        // console.log("guess has been called");
    }
}

module.exports = Word;

// var testWord = new Word("swan");
// console.log(testWord.displayWord());
// console.log(testWord.guess("w"));
// console.log(testWord.displayWord());
// console.log(testWord.guess("n"));
// console.log(testWord.displayWord());