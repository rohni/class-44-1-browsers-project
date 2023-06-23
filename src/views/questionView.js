// import { ANSWERS_LIST_ID } from '../constants.js';
// import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

// /**
//  * Create a full question element
//  * @returns {Element}
//  */
// export const createQuestionElement = (question) => {
//   const element = document.createElement('div');

//   // I use String.raw just to get fancy colors for the HTML in VS Code.
//   // Added class=classbtn to it for CSS purposes NK
//   element.innerHTML = String.raw`
//     <h1>${question}</h1>
//     <ul id="${ANSWERS_LIST_ID}" class="classbtn"> 
//     </ul>

//     <button id="${NEXT_QUESTION_BUTTON_ID}">
//       Next question
//     </button>
//   `;

//   return element;
// };


//update from diaa


// questionView.js
// const createQuestionElement = (question) => {
//   const element = document.createElement('div');
//   element.innerHTML = `
//     <h1>${question}</h1>
//     <ul id="${ANSWERS_LIST_ID}">
//     </ul>
//     <button id="${NEXT_QUESTION_BUTTON_ID}">
//       Next question
//     </button>
//     <div id="${PROGRESS_BAR_ID}"></div>
//     <div id="${SCORE_COUNTER_ID}">
//       Score: <span id="score-number">0</span>
//       <img id="answer-indicator" src="" alt="">
//     </div>
//   `;
//   return element;
// };