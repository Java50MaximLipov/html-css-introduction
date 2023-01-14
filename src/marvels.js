//parsing the source of questions-answers from text file
// let questionsWords=[];
// fetch('qa.json')
//   .then(response => response.json())
//   .then(data => {
//     questionsWords = data.map(item => [item.question, item.answer])
//     // the rest of your code here
//   });



//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;

//global variables
const questionsWords = [["question1", "answer1"], ["question2", "answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
let userLetter;
let answerWord = "";

//functions
function startGame() {
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = false;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    answerWord = questionsWords[currentIndex][1];
    initialLettersNumber = Math.floor(answerWord.length * 0.3);
    remainedLettersNumber = initialLettersNumber;
    remainedLettersElement.innerHTML = `Keep going. You still have ${initialLettersNumber} tries`;
    playAgain.style.display = 'none';
    resultMessage.innerHTML = '';
    wordElement.innerHTML = getWordDivs();
}
function getWordDivs() {
    return Array.from(answerWord).map((letter) => `<div class="letter">${letter}</div>`).join('');
}
function checkWord() {
    if (wordInputElement.value === answerWord) {
        resultMessage.innerHTML = "Correct answer! You Win!";
    } else {
        resultMessage.innerHTML = "You Lose!";
    }
    wordInputElement.readOnly = true;
    finishGame();
}
function processLetter() {
    let userLetter = letterInputElement.value;
    const wordArray = document.querySelectorAll(".letter");
    if (answerWord.includes(userLetter)) {
        wordArray.forEach(function (_, index) {
            if (answerWord[index] === userLetter) {
                wordArray[index].style.backgroundColor = "white";
            }
        });
    }
    remainedLettersNumber--;
    if (remainedLettersNumber > 0) {
        remainedLettersElement.innerHTML = `Keep going. You still have ${remainedLettersNumber} tries`;
    } else {
        takeChance();
    }
}
function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    remainedLettersNumber = 0;
    remainedLettersElement.innerHTML = "Good luck with the guess!";
}
function finishGame() {
    //TODO
    playAgain.style.display = 'block';
}

//actions
startGame();