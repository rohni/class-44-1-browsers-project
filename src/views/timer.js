
// //Timer
// const timerEl = document.getElementById('timeLeft');
// const allowedTime = 30;
// let interval;
// let sec = allowedTime;

// //export in order we need it for other thing
// //inside the timer function we need an element as it is in the HTML with id attribute timeLeft
// export function stopTimer () {
//   clearInterval(interval);
// }

// function nextQuestion () {
//   setTimeout(() => document.getElementById('next-button').click(), 1000); 
// }

// export function startTimer() {
  
//   clearInterval(interval);
//   sec = allowedTime;
//   setTimeDisplay(sec);
//   interval = setInterval(countdown, 2000);
// }

// function setTimeDisplay(sec) {
//   timerEl.innerHTML = `00: ${sec}`;
//   if (sec < 10) {
//     timerEl.innerHTML = `00: 0${sec}`;
//   }
// }

// //created countdown function which is decreases the sec variable above by 1
// function countdown() {
//   sec--;
//     //so here each time we update the innerHTML of the timerEl decrease the sec 
//   setTimeDisplay(sec);
//   // when the time's up directly move on to the next question
//   if(sec <= 0){
//     timerEl.innerHTML = "Time's up!";
//     stopTimer()
//     nextQuestion()
//   }
// }

// export function timer() {
//   // if we are on a question page, then start timer.
//   const answers = document.getElementById('options');
//   if (answers && answers.children.length > 0) {
//     startTimer();
//     answers.addEventListener('change', () => {
//       stopTimer();
//       nextQuestion();
//     });
//   } else {
//     timerEl.innerHTML = 'Countdown';
//   }
// }



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