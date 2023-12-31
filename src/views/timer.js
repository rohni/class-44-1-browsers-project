
// timer.js
const timerEl = document.getElementById('timeLeft');
const allowedTime = 30;
let interval;
let sec = allowedTime;

export const stopTimer = () => {
  clearInterval(interval);
};

const nextQuestion = () => {
  setTimeout(() => document.getElementById('next-button').click(), 1000);
};

export const startTimer = () => {
  clearInterval(interval);
  sec = allowedTime;
  setTimeDisplay(sec);
  interval = setInterval(countdown, 1000);
};

const setTimeDisplay = (sec) => {
  timerEl.innerHTML = `00:${sec < 10 ? '0' : ''}${sec}`;
};

const countdown = () => {
  sec--;
  setTimeDisplay(sec);
  if (sec <= 0) {
    timerEl.innerHTML = "Time's up!";
    stopTimer();
    nextQuestion();
  }
};

export const timer = () => {
  const answers = document.getElementById('options');
  if (answers && answers.children.length > 0) {
    startTimer();
    answers.addEventListener('change', () => {
      stopTimer();
      nextQuestion();
    });
  } else {
    timerEl.innerHTML = 'Countdown';
  }
};