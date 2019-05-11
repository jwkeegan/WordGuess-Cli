function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.beenGuessed = function() {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    }
    this.testLetter = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
            return true;
        }
    }
}

module.exports = Letter;

// var test = new Letter("a");
// console.log(test.beenGuessed());
// test.testLetter("b");
// console.log(test.beenGuessed());
// test.testLetter("a");
// console.log(test.beenGuessed());