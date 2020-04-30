const text =
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK";

const words = text.split(" ");
const countdown = document.querySelector(".countdown");
const display = document.querySelector(".text");

let timers = [];
let timer = 5;
let i = 0;
let stop = false;

function prepareRead() {
    const timerInterval = setInterval(function () {
        timer--;
        countdown.textContent = timer + " seconds left";

        if (timer === 0) {
            countdown.textContent = " ";
            clearInterval(timerInterval);
            speedRead();
        }
    }, 1000);
}

function finalScore() {
    switch (true) {
        case i > 0 && i <= 15:
            display.textContent = "Your final score is: 60 words per minute ";
            break;
        case i > 15 && i <= 30:
            display.textContent = "Your final score is: 120 words per minute ";
            break;
        case i > 30 && i <= 50:
            display.textContent = "Your final score is: 160 words per minute ";
            break;
        case i > 50 && i <= 75:
            display.textContent = "Your final score is: 240 words per minute ";
            break;
        case i > 75 && i <= 105:
            display.textContent = "Your final score is: 320 words per minute ";
            break;
        case i > 105 && i <= 140:
            display.textContent = "Your final score is: 480 words per minute ";
            break;
        case i > 140 && i <= 179:
            display.textContent = "Your final score is: 640 words per minute ";
            break;
        case i === 180:
            display.textContent =
                "You aced the test! Your final score is: 960 words per minute ";
            break;
    }
    stop = true;
}

function beginAgain() {
    display.textContent = " ";
    countdown.textContent = "5 seconds left";
    timer = 5;
    i = 0;
    stop = false;
    prepareRead();
}

function speedRead() {
    // 60 wpm
    const timeOne = setInterval(function () {
        if (i === 5) {
            clearInterval(timeOne);
            // 120 wpm
            const timeTwo = setInterval(function () {
                if (i === 15) {
                    clearInterval(timeTwo);
                    // 160 wpm
                    const timeThree = setInterval(function () {
                        if (i === 30) {
                            clearInterval(timeThree);
                            // 240 wpm
                            const timeFour = setInterval(function () {
                                if (i === 50) {
                                    clearInterval(timeFour);
                                    // 320 wpm
                                    const timeFive = setInterval(function () {
                                        if (i === 75) {
                                            clearInterval(timeFive);
                                            // 480 wpm
                                            const timeSix = setInterval(
                                                function () {
                                                    if (i === 105) {
                                                        clearInterval(timeSix);
                                                        // 640 wpm
                                                        const timeSeven = setInterval(
                                                            function () {
                                                                if (i === 140) {
                                                                    clearInterval(
                                                                        timeSeven
                                                                    );
                                                                    // 960 wpm
                                                                    const timeEight = setInterval(
                                                                        function () {
                                                                            if (
                                                                                i ===
                                                                                180
                                                                            ) {
                                                                                clearInterval(
                                                                                    timeEight
                                                                                );
                                                                                finalScore();
                                                                            } else if (
                                                                                stop ===
                                                                                true
                                                                            ) {
                                                                                clearInterval(
                                                                                    timeEight
                                                                                );
                                                                            } else {
                                                                                if (
                                                                                    stop ===
                                                                                    false
                                                                                ) {
                                                                                    display.textContent =
                                                                                        words[
                                                                                            i
                                                                                        ];
                                                                                    i++;
                                                                                }
                                                                            }
                                                                        },
                                                                        62.5
                                                                    );
                                                                } else if (
                                                                    stop ===
                                                                    true
                                                                ) {
                                                                    clearInterval(
                                                                        timeSeven
                                                                    );
                                                                } else {
                                                                    if (
                                                                        stop ===
                                                                        false
                                                                    ) {
                                                                        display.textContent =
                                                                            words[
                                                                                i
                                                                            ];
                                                                        i++;
                                                                    }
                                                                }
                                                            },
                                                            93.75
                                                        );
                                                    } else if (stop === true) {
                                                        clearInterval(timeSix);
                                                    } else {
                                                        if (stop === false) {
                                                            display.textContent =
                                                                words[i];
                                                            i++;
                                                        }
                                                    }
                                                },
                                                125
                                            );
                                        } else if (stop === true) {
                                            clearInterval(timeFive);
                                        } else {
                                            if (stop === false) {
                                                display.textContent = words[i];
                                                i++;
                                            }
                                        }
                                    }, 187.5);
                                } else if (stop === true) {
                                    clearInterval(timeFour);
                                } else {
                                    if (stop === false) {
                                        display.textContent = words[i];
                                        i++;
                                    }
                                }
                            }, 250);
                        } else if (stop === true) {
                            clearInterval(timeThree);
                        } else {
                            if (stop === false) {
                                display.textContent = words[i];
                                i++;
                            }
                        }
                    }, 375);
                } else if (stop === true) {
                    clearInterval(timeTwo);
                } else {
                    if (stop === false) {
                        display.textContent = words[i];
                        i++;
                    }
                }
            }, 500);
        } else if (stop === true) {
            clearInterval(timeOne);
        } else {
            if (stop === false) {
                display.textContent = words[i];
                i++;
            }
        }
    }, 1000);
}

prepareRead();
