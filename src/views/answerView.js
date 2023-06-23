// import { quizData } from '../data.js';
// import {USER_INTERFACE_ID} from '../constants.js'
// const userInterface = document.getElementById(USER_INTERFACE_ID);

/**
 * Create an Answer element
 * @returns {Element}
 */
// <<<<<<< Quiz-Sabina
// /*export const createAnswerElement = (key, answerText) => {
//   const element = document.createElement('li');
//   element.innerHTML = String.raw`
//     ${key}: ${answerText};
//   `;
//   return element;
// };*/

// //.s element to display score

// const createScoreElement = ()=>{
//   const scoreElement = document.createElement('p');
// scoreElement.textContent = `Score: ${quizData.score}`;
// userInterface.appendChild(scoreElement);
// }

// export const createAnswerElement = (key, answerText, isCorrect) => {
//   const answerContainer = document.createElement('div');
//   answerContainer.className = 'answerContainer';

//   const radioButton = document.createElement('input');
//   radioButton.type = 'radio';
//   radioButton.name = 'answerOption';
//   radioButton.value = key;
//   radioButton.id = key;
//   answerContainer.appendChild(radioButton);

//   const label = document.createElement('label');
//   label.htmlFor = key;
//   label.textContent = answerText;
//   answerContainer.appendChild(label);
//     if (isCorrect) {
//     answerContainer.classList.add('correct-answer');
//   } else {
//     answerContainer.classList.add('wrong-answer');
//   }

//     const updateScore = () => {
//       let score = 0;

//       for (const question of quizData.questions) {
//         if (question.selected === question.correct) {
//           score += 5;
//         }
//       }

//       quizData.score = score;
//     };

//   radioButton.addEventListener('change', () => {

//     quizData.questions[quizData.currentQuestionIndex].selected = key;

//     updateScore();

//   });

//   return answerContainer;
// =======
// export const createAnswerElement = (key, answerText) => {
//   // const element = document.createElement('li');
//   //it was already there no need for li now we created options btn to choose the correct answer NK
//   const button = document.createElement('button');
//   button.classList.add(`answer-btn`);

//   button.innerHTML = String.raw`
//     ${key}: ${answerText};
//   `;
//   return button;
// >>>>>>> main
