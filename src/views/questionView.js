import { ANSWERS_LIST_ID } from '../constants.js';
import { updateScoreCounter } from '../views/answerView.js';

export const createQuestionElement = (questionText) => {
  const questionElement = document.createElement('p');
  questionElement.textContent = questionText;
  return questionElement;
};

export const createAnswerElement = (answerKey, answerText) => {
  const answerContainer = document.createElement('div');
  answerContainer.className = 'answerContainer';

  const answerInput = document.createElement('input');
  answerInput.type = 'radio';
  answerInput.name = 'answerOption';
  answerInput.value = answerKey;
  answerContainer.appendChild(answerInput);

  const answerLabel = document.createElement('label');
  answerLabel.textContent = answerText;
  answerContainer.appendChild(answerLabel);

  return answerContainer;
};

export const updateAnswerClass = (answerContainer, isCorrect) => {
  answerContainer.classList.remove('correct', 'wrong');
  if (isCorrect) {
    answerContainer.classList.add('correct');
    updateScoreCounter(quizData.score + 1);
  } else {
    answerContainer.classList.add('wrong');
  }
};

export const showNextQuestion = () => {
  const answersList = document.getElementById(ANSWERS_LIST_ID);
  answersList.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  answersList.appendChild(questionElement);

  for (const key in currentQuestion.answers) {
    const answerElement = createAnswerElement(key, currentQuestion.answers[key]);
    answersList.appendChild(answerElement);
  }
};


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
