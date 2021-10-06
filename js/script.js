// text for reading test
const text =
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! count shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK";

// split text into array
const words = text.split(' ');

// declare starting variables
const display = document.querySelector('.text');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let stopGame = false;
let count = 0;
let finalScore = '';

// start button
const startGame = () => {
    startBtn.disabled = true;
    display.textContent = '5 seconds left';
    count = 0;
    stopGame = false;

    let timer = 5;
    // start and stop beginning countdown timer
    const timerInterval = setInterval(function () {
        timer--;
        display.textContent = timer + ' seconds left';

        if (timer === 0) {
            clearInterval(timerInterval);
            speedRead();
            stopBtn.disabled = false;
        }
    }, 1000);
};

// display words on screen by setting a timeout
const speedRead = () => {
    if (!stopGame) {
        displayWord();

        // get latest speed based on current count
        const speed = getSpeed(count);
        setTimeout(speedRead, speed);
    } else {
        endGame();
    }
};

// set word speed and score text
function getSpeed(count) {
    switch (true) {
        case count >= 180:
            stopGame = true;
            return 1000;
        case count > 0 && count <= 5:
            finalScore = 'Your final score is around 60 words per minute';
            return 1000;
        case count > 5 && count <= 15:
            finalScore = 'Your final score is around 60 words per minute';
            return 500;
        case count > 15 && count <= 30:
            finalScore = 'Your final score is around 120 words per minute ';
            return 375;
        case count > 30 && count <= 50:
            finalScore = 'Your final score is around 160 words per minute ';
            return 250;
        case count > 50 && count <= 75:
            finalScore = 'Your final score is around 240 words per minute ';
            return 187.5;
        case count > 75 && count <= 105:
            finalScore = 'Your final score is around 320 words per minute ';
            return 125;
        case count > 105 && count <= 140:
            finalScore = 'Your final score is around 480 words per minute ';
            return 93.75;
        case count > 140 && count <= 178:
            finalScore = 'Your final score is around 640 words per minute ';
            return 62.5;
        case count >= 179:
            finalScore =
                'You aced the test! Your final score is around 960 words per minute ';
            return 62.5;
    }
}

// display current word for reading test
function displayWord() {
    display.textContent = words[count];
    count++;
}

// end the game
const endGame = () => {
    stopGame = true;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    display.textContent = finalScore;
};
