

let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(updateTimer, 10);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    msec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay();
}

function updateTimer() {
    msec++;
    if (msec >= 100) {
        msec = 0;
        sec++;
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hr++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("hr").innerText = hr.toString().padStart(2, '0');
    document.getElementById("min").innerText = min.toString().padStart(2, '0');
    document.getElementById("sec").innerText = sec.toString().padStart(2, '0');
    document.getElementById("msec").innerText = msec.toString().padStart(2, '0');
}























