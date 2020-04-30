const text =
    "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK";

const words = text.split(" ");
const countdown = document.querySelector(".countdown");
const display = document.querySelector(".text");

let timer = 5;
let i = 0;

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
                                                                            } else {
                                                                                display.textContent =
                                                                                    words[
                                                                                        i
                                                                                    ];
                                                                                i++;
                                                                            }
                                                                        },
                                                                        62.5
                                                                    );
                                                                } else {
                                                                    display.textContent =
                                                                        words[
                                                                            i
                                                                        ];
                                                                    i++;
                                                                }
                                                            },
                                                            93.75
                                                        );
                                                    } else {
                                                        display.textContent =
                                                            words[i];
                                                        i++;
                                                    }
                                                },
                                                125
                                            );
                                        } else {
                                            display.textContent = words[i];
                                            i++;
                                        }
                                    }, 187.5);
                                } else {
                                    display.textContent = words[i];
                                    i++;
                                }
                            }, 250);
                        } else {
                            display.textContent = words[i];
                            i++;
                        }
                    }, 375);
                } else {
                    display.textContent = words[i];
                    i++;
                }
            }, 500);
        } else {
            display.textContent = words[i];
            i++;
        }
    }, 1000);
}

prepareRead();
