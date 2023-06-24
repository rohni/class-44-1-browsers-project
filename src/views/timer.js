import { nextQuestion } from './pages/questionPage.js';

let interval;
//export in order we need it for other thing
//inside the timer function we need an element as it is in the HTML with id attribute timeLeft
export function timer() {
  let timerEl = document.getElementById('timeLeft');
  let sec = 30;
//created countdown function which is decreases the sec variable above by 1
  function countdown() {
      sec--;
      //so here each time we update the innerHTML of the timerEl decrease the sec 
    timerEl.innerHTML = `00: ${sec}`;
    if (sec < 10) {
      timerEl.innerHTML = `00: 0${sec}`;
    }

    // when the time's up directly move on to the next question

    if (sec <= 0) {
      timerEl.innerHTML = "Time's up!";
      clearInterval(interval);
      setTimeout(nextQuestion, 1000);
    }
  }
  // start the timer and if the user pass to the next question clear the previous one
  function startTimer() {
    clearInterval(interval);
    sec = 30;
    interval = setInterval(countdown, 1000);
  }

  if (interval === undefined) {
    startTimer();
  } else {
    timerEl.innerHTML = '';
    startTimer();
  }
}


