var Letter = require("./Letter");

function Word(word) {
    this.word = word;
    this.letters = [];
    for (i = 0; i < this.word.length; i++) {
        this.letters.push(new Letter(this.word.charAt(i)));
    }
    this.print = function() {
        var revealed = [];
        for (i = 0; i < this.letters.length; i++) {
            revealed.push(this.letters[i].beenGuessed());
        }
        return revealed.join(" ");
    }
    this.guessLetter = function(letter) {
        var goodGuess = false;
        for (i = 0; i < this.letters.length; i++) {
            if (this.letters[i].testLetter(letter)) {
                goodGuess = true;
            }
        }
        return goodGuess;
    }
}

module.exports = Word;

// var test = new Word("testing");
// console.log(test.print());
// test.guessLetter("t");
// console.log(test.print());
// test.guessLetter("e");
// test.guessLetter("s");
// console.log(test.print());
// test.guessLetter("r");
// console.log(test.print());
// test.guessLetter("i");
// test.guessLetter("n");
// test.guessLetter("g");
// console.log(test.print());
