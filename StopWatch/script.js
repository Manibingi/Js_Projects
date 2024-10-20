const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.querySelector(".stopwatch");

let milli = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function maniWatch() {
  milli++;

  if (milli === 100) {
    seconds++;
    milli = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  console.log("hello");

  timer.textContent =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (milli < 10 ? "0" : "") +
    milli;
}

function startBtn() {
  interval = setInterval(maniWatch, 10);
  start.setAttribute("disabled", true);
}

function stopBtn() {
  clearInterval(interval);
  start.removeAttribute("disabled");
}

function rstBtn() {
  clearInterval(interval);
  start.removeAttribute("disabled");
  milli = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = `0${hours}:0${minutes}:0${seconds}:0${milli}`;
}
