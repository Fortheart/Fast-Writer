window.addEventListener('load', init)
//Globals
let time = 5;
let score = 0;
let isPlaying;

//DOM Elements
const generatedWord = document.querySelector(".generatedWordText");
const input = document.querySelector("input");
const scoreCounterText = document.querySelector(".scoreCounterText");
const timer = document.querySelector(".timerText");

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

//Initialize

function init() {
    console.log("init");
    //Load word from array
    showWord(words);
    //Match word input vs generated
    input.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}
//Start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        input.value = "";
        score++;
    }
    scoreCounterText.innerHTML = score;
}
//Match current word to the word input
function matchWords() {
    if (input.value === generatedWord.innerHTML) {
        return true;
    }
    else {
        return false;
    }
}


//Pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    generatedWord.innerHTML = words[randIndex];
}
//Timer
function countdown() {
    //Make sure time is not run out
    if (time > 0) {
        //Decrese time
        time--;
    }
    else if (time === 0) {
        //Game is over
        isPlaying = false;
    }
    //Show time
    timer.innerHTML = time;
}

//Check game status

function checkStatus() {
    if (!isPlaying && time === 0) {
        generatedWord.innerHTML = "Game Over!";
        generatedWord.style.color = "red";
    }
}