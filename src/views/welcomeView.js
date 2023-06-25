// welcomView.js
import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1 id="welcome" class="classbtn">Welcome To IQ Quiz</h1>
    <button id="${START_QUIZ_BUTTON_ID}" class="classbtn">Start Quiz</button>
  `;
  return element;
};
