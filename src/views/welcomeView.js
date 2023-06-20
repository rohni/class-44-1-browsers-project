import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  //  added id to h1 to style it CSS NK
  element.innerHTML = String.raw`
    <h1 id='welcome'>Welcome To IQ Quiz</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
