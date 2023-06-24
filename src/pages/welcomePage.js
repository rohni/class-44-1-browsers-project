// <<<<<<< timer-attempt
// import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
// import { startTimer } from '../views/timerView.js';
// import { createWelcomeElement } from '../views/welcomeView.js';
// import { initQuestionPage } from './questionPage.js';
// =======
// //import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
// //import { createWelcomeElement } from '../views/welcomeView.js';
// //import { initQuestionPage } from './questionPage.js';
// >>>>>>> main

// export const initWelcomePage = () => {
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';

//   const welcomeElement = createWelcomeElement();
//   userInterface.appendChild(welcomeElement);
// welcomePage.js

import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = (userInterface) => {
  const welcomePageHTML = `
    <div id="welcome-page">
      <h1>Welcome to the IQ Quiz</h1>
      <p>This quiz will test your general knowledge on various topics.</p>
      <p>You will have to answer ten questions with four options each.</p>
      <p>Only one option is correct for each question.</p>
      <p>You will see your score and result at the end of the quiz.</p>
      <button id="start-quiz-button">Start Quiz</button>
    </div>
  `;

  userInterface.innerHTML = welcomePageHTML;

  const startQuizButton = document.getElementById('start-quiz-button');
  startQuizButton.addEventListener('click', () => {
    initQuestionPage(userInterface);
  });
};












//   document
//     .getElementById(START_QUIZ_BUTTON_ID)
//     .addEventListener('click', startQuiz);

// <<<<<<< timer-attempt
// const startQuiz = () => {
//   initQuestionPage();
//   startTimer();
// };
// =======
// // };
// >>>>>>> main

// const startQuiz = () => {
//   initQuestionPage();
// };

// Update from diaa

// const initWelcomePage = () => {
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';

//   const welcomeElement = createWelcomeElement();
//   userInterface.appendChild(welcomeElement);

//   document.getElementById(START_QUIZ_BUTTON_ID).addEventListener('click', startQuiz);
// };

// const startQuiz = () => {
//   initQuestionPage();
// };
