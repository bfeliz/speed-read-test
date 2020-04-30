const poem =
    "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
const words = poem.split(" ");
const countdown = document.querySelector(".countdown");
const display = document.querySelector(".poem");

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
    const newTimer = setInterval(function () {
        if (words[i] === 0) {
            clearInterval(newTimer);
        } else {
            display.textContent = words[i];
            i++;
        }
    }, 1000);
}

prepareRead();
