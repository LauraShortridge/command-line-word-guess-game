//This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. 
//That means the constructor should define:
//A string value to store the underlying character for the letter
//A boolean value that stores whether that letter has been guessed yet
//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) 
//if the letter has not been guessed
//A function that takes a character as an argument and checks it against the underlying character, updating the stored 
//boolean value to true if it was guessed correctly


function Letter(meaning) {
    this.meaning = meaning;
}
function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.displayLetter = function() {
        if (!this.isGuessed) {
            return this.letter;
        } else {
            return console.log("_");
        }
    }
    this.check = function check(x) {
        if (x === this.letter)
            this.isGuessed = true;
            return true;
        }
    }


    const z = process.argv[2]

    new Letter();

    z.check(process.argv[2]);
    z.displayLetter();

module.exports = Letter;