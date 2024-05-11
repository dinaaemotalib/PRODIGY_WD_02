
// Selecting buttons from HTML
let startBtn = document.querySelector('.container2 button:nth-child(3)');
let stopBtn = document.querySelector('.container2 button:nth-child(1)');
let resetBtn = document.querySelector('.container2 button:nth-child(2)');
let continueBtn = document.querySelector('.container2 button:nth-child(4)');

// Selecting timer elements from HTML
let hourElement = document.querySelector('.container1 .number:nth-child(1)');
let minuteElement = document.querySelector('.container1 .number:nth-child(2)');
let secondElement = document.querySelector('.container1 .number:nth-child(3)');

// Initializing variables
let timer;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

// Function to start the stopwatch
function startStopwatch() {
    timer = true;
    stopWatch();
}

// Function to stop the stopwatch
function stopStopwatch() {
    timer = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateTimerDisplay();
}

// Function to continue the stopwatch (same as starting it)
function continueStopwatch() {
    startStopwatch();
}

// Adding event listeners to buttons
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
continueBtn.addEventListener('click', continueStopwatch);

// Function to update the display with current time
function updateTimerDisplay() {
    hourElement.textContent = formatTime(hour);
    minuteElement.textContent = formatTime(minute);
    secondElement.textContent = formatTime(second);
}

// Function to format time (add leading zero if necessary)
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Function to run the stopwatch
function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        updateTimerDisplay();
        setTimeout(stopWatch, 10);
    }
}
// Function to update the display with current time
function updateTimerDisplay() {
    hourElement.innerHTML = formatTime(hour) + "<span>hr</span>";
    minuteElement.innerHTML = formatTime(minute) + "<span>min</span>";
    secondElement.innerHTML = formatTime(second) + "<span>sec</span>";
}

// Starting the stopwatch when the page loads
startStopwatch();

