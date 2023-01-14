//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");

//global variables
const questionsWords = window.questionsAnswersList;
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let answerWord = "";

//functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = false;
    currentIndex = Math.floor(Math.random() * questionsWords.length);
    questionElement.innerHTML = questionsWords[currentIndex][0];
    answerWord = questionsWords[currentIndex][1].toUpperCase();
    initialLettersNumber = Math.ceil(answerWord.length * 0.3);
    remainedLettersNumber = initialLettersNumber;
    remainedLettersElement.innerHTML = `Let's start. You have ${initialLettersNumber} tries.`;
    playAgain.style.display = 'none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
}
function getWordDivs() {
    return Array.from(answerWord.toUpperCase()).map((letter) => `<div class="letter">${letter}</div>`).join('');
}
function checkWord() {
    wordInputElement.readOnly = true;
    resultMessage.innerHTML = wordInputElement.value.toUpperCase() === answerWord ? "Correct answer! You Won!" : "You Lost!";
    finishGame();
}
function processLetter() {
    let userLetter = letterInputElement.value.toUpperCase();
    const wordArray = document.querySelectorAll(".letter");
    answerWord.includes(userLetter) ? wordArray.forEach((_, index) =>
        answerWord[index] === userLetter ? wordArray[index].style.backgroundColor = "white" : null) : null;
    remainedLettersNumber--;
    remainedLettersNumber > 0 ? remainedLettersElement.innerHTML = `Keep going. You still have ${remainedLettersNumber} tries.` : takeChance();
}
function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    remainedLettersNumber = 0;
    remainedLettersElement.innerHTML = "Good luck with the guess!";
}
function finishGame() {
    const wordArray = document.querySelectorAll(".letter");
    wordArray.forEach((_, index) => wordArray[index].style.backgroundColor = "white");
    playAgain.style.display = 'block';
}

//actions
startGame();