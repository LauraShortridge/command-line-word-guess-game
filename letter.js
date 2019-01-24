
function Letter(letter) {
    // Stores the letter
    this.letter = letter;
    // Checks if the letter is between a and z (included) and sets the isVisible flag based on that (true or false)
    if (/[a-z]/i.test(letter)) {
        this.isVisible = false;
    } else {
        this.isVisible = true
    }

    // Returns the letter if isvisible flag is true, otherwise returns "_"
    this.displayLetter = function displayLetter() {
        if (this.isVisible) {
            return this.letter;
        } 
           return "_";
    }
    // Returns 
    this.check = function check(x) {
        if (x === this.letter) {
            this.isVisible = true;
            return true;
        } else {
            return false; 
        }
    }
}

// var testLetter = new Letter("a");
// console.log(testLetter.displayLetter());
// console.log(testLetter.check("a"));
// console.log(testLetter.displayLetter());

module.exports = Letter;