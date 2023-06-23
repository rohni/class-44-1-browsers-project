
/** Countdown 
 * Here we have functions for handling the timer
 */

import { TIMER_ID, USER_INTERFACE_ID } from "../constants.js";

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const addTimer = (appElement) => {
    // checks if the element exists and returns it or creates it.
    const timerElement = appElement.querySelector('div#timer');
    if(timerElement){
        return timerElement;
    } else {
        const timerElement = document.createElement('div');
        timerElement.setAttribute('id', TIMER_ID);
        return appElement.appendChild(timerElement);
    }
}

const allowedTime = 30;

let startTime = null;

export const startTimer = () => {
    // first we need the start datetime
    startTime = new Date();
    updateTimerDisplay(allowedTime);    // and we stop the timer.

    const intervalID = setInterval(() => {
        const timeElapsed = updateTimer();
        if(timeElapsed > 0){
            updateTimerDisplay(timeElapsed)
        } else {
            clearInterval(intervalID);
        }
    }, 1000);
}

const updateTimer = () => {
    // get the current elapsed time.
    const currTime = new Date();
    // subtract the start time from the current time which gives you the difference in milliseconds
    const timeElapsed = Math.floor(Math.abs(currTime - startTime)/1000)
    console.log('elapsed time: ', timeElapsed);
    return allowedTime - timeElapsed;
}

const updateTimerDisplay = (secondsLeft, ) => {
    addTimer(userInterface).textContent = secondsLeft > 0 ? (secondsLeft).toString().padStart(2,0) : 0;
}


// let timerEl = document.getElementById('timeLeft');
// let sec = 30;

// function countdown() {
//     sec--;
//     timerEl.innerHTML = `00:${sec}`;
//     if (sec < 10) {
//         timerEl.innerHTML = `00: 0${sec}`
//     }
// }
// const timerElement = document.createElement('div');
//         timerElement.setAttribute('id', TIMER_ID);                                                                                                                                                                                                                                                                                               

// const paragraphEl = document.createElement('p');
// paragraphEl.textContent = '00 : 30';
// paragraphEl.setAttribute()


