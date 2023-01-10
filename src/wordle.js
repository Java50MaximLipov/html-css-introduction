//  references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElements = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");

//  variables required for js logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver",
    "index", "script", "peace", "picture"];
let trials;
let word;
let flagGameOver = false;

//  functions
function startGame() {
    word = getWord();
    fillLettersDivs();
    flagGameOver = true;
    trials = word.length + 1;
    playAgainElement.style.display = "none";
    gameResultElement.innerHTML = "";
    trialsElements.innerHTML = `Remained trials ${trials}`;
}
function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}
function fillLettersDivs() {
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce(function (res) {
        res = res + '<div class="letter"></div>';
        return res;
    }, '');
    lettersDivs = document.querySelectorAll(".letter");
}
function onChange() {
    if (flagGameOver) {
        alert('Game is over, press "Play Again".');
    } else {
        const trialWord = guessInputElement.value;
        trials--;
        trialsElements.innerHTML = `Remained trials ${trials}`;
        if (trialWord.length != word.length) {
            alert('Wrong number of letters.');
        } else 
        // {
        //     coloringWord(trialWord){

        //     }
        // }
    }

}
function coloringWord(trialWord) {
    const arrayWord = Array.from(trialWord);
    arrayWord.forEach(function (letter, index) {
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor(letter, index);
    });
}
function getColor(letter, index) {  //  green - #459525;    yellow - #c8a111;   "red" - #474b4d
    let res = 'red';
    if (word.includes(letter)) {
        res = word[index] == letter
    }
}
function finishGame() {
    //  TODO
}

//  actions
startGame();