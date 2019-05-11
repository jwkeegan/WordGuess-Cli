var Word = require("./Word");
var inquirer = require("inquirer");

var words = ["one", "two", "three", "four"];
var remainingGuesses = 0;
var guessedLetters = [];

function newGame() {
    // randomly choose a word from the words array, and make it into a Word object
    var chosenWord = new Word(words[Math.floor(Math.random() * words.length)]);

    // Tell the user to guess a letter
    console.log("New Game!\n");
    console.log(chosenWord.print());

    // Set remainingGuesses to 10, empty guessedLetters
    remainingGuesses = 10;
    guessedLetters = [];

    // Play the game
    playGame(chosenWord);
}

function playGame(chosenWord) {
    // Check if player has won game
    if (!chosenWord.print().includes("_")) {
        console.log("YOU WIN!");
        newGame();
    }

    // Check if player has remaining guesses
    else if (remainingGuesses === 0) {
        console.log("No guesses left.. You lost!");
        newGame();
    }

    // Otherwise, proceed to main game
    else {
        // use inquirer to prompt user to guess letters
        inquirer.prompt([

            {
                type: "input",
                name: "userGuess",
                message: "Guess a Letter!"
            }

            // After the prompt, store the response in the var response
        ]).then(function (response) {

            // trim and set guess to lower case
            var guess = response.userGuess.trim().toLowerCase();

            // Check if user already guessed that letter
            if (guessedLetters.includes(guess)) {
                console.log("That letter was already guessed...");
            } else {
                // add letter to guessedLetters
                guessedLetters.push(guess);

                // check if guess is correct while processing guess
                if (chosenWord.guessLetter(guess)) {
                    console.log("CORRECT!\n");
                } else {
                    console.log("Wrong...\n");
                    remainingGuesses--;
                }
            }

            //after guess has been processed, prompt another guess
            console.log("Remaining Guesses: " + remainingGuesses);
            console.log(chosenWord.print());
            playGame(chosenWord);

        });

    }

}

newGame();