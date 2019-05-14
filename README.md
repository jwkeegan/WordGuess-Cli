# WordGuess-Cli

## Overview

The WordGuess-Cli node app functions like the classic game Hangman. You are given the length of the word you are guessing, and a set number of incorrect guesses allowed before losing that round. This app, win or lose, automatically selects a new word and begins a new round for you to play.

## Details 

The app starts with this prompt:

![New Game](./assets/new-game.PNG)

and as you select letters, the game does one of three things. If you are incorrect, the game tells you so, and decrements the number of guesses remaining.

![Incorrect Guess](./assets/incorrect.PNG)

If you are correct, the game tells you so, and fills in the letter wherever it appears in the word.

![Correct Guess](./assets/correct.PNG)

If you have already guessed that letter, the game will tell you this. In all three cases, the game automatically prompts for a new letter.

![Already Guessed Letter](./assets/already-guessed.PNG)

When you correctly guess a word, the game cheers for you and automatically starts a new game.

![Image when game is won](./assets/game-win.PNG)

If you run out of guesses.. You lost, but a new game is started.

![Image when game is lost](./assets/game-lose.PNG)

The theme of this WordGuess-Cli application is Characters from the TV show 'The Office'. You may press Ctrl+C to leave the game.