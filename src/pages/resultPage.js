// resultPage.js
import { initWelcomePage } from './welcomePage.js';

export function initResultPage(userInterface, score, totalQuestions, initQuestionPageCallback = null) {
  const resultPage = document.createElement('div');
  resultPage.className = 'end-page';

  // create a h1 element for the quiz result title
  const resultTitle = document.createElement('h1');
  resultTitle.textContent = 'Quiz Result';
  resultPage.appendChild(resultTitle);

  // create a p element for the score display
  const scoreDisplay = document.createElement('p');
  scoreDisplay.innerHTML = `Your Score: <span id="score">${score}</span> / ${totalQuestions}`;
  resultPage.appendChild(scoreDisplay);

  // create a p element for the result message
  const resultMessage = document.createElement('p');
  resultMessage.id = 'result-message';

  switch (true) {
    case score === totalQuestions:
      resultMessage.textContent = 'Congratulations! You got all the answers correct!';
      break;
    case score >= Math.floor(totalQuestions / 2):
      resultMessage.textContent = 'Good job! You passed the quiz.';
      break;
    default:
      resultMessage.textContent = 'Better luck next time!';
  }
  resultPage.appendChild(resultMessage);

  // create a button element for the restart quiz option
  const restartButton = document.createElement('button');
  restartButton.id = 'restart-button';
  restartButton.textContent = 'Restart Quiz';

  if (initQuestionPageCallback) {
    restartButton.addEventListener('click', () => {
      initQuestionPageCallback();
    });
  } else {
    restartButton.addEventListener('click', () => {
      initWelcomePage(userInterface); // Navigate back to the welcome page
    });
  }

  resultPage.appendChild(restartButton);

  // clear the user interface and append the result page element
  if (userInterface) {
    userInterface.innerHTML = '';
    userInterface.appendChild(resultPage);
  } else {
    console.error('Error: userInterface element is not defined.');
  }
}





// export const showResultPage = () => {
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';

//   const resultPageElement = createResultPageElement();
//   userInterface.appendChild(resultPageElement);

//   const restartButton = document.getElementById('restart-button');
//   restartButton.addEventListener('click', restartQuiz);

//   updateScoreCounter();
// };

// export const createResultPageElement = () => {
//   const element = document.createElement('div');
//   element.innerHTML = `
//     <h1>Quiz Result</h1>
//     <div id="${SCORE_COUNTER_ID}">
//       Score: <span id="score-number">0</span>
//       <img id="answer-indicator" src="" alt="">
//     </div>
//     <button id="restart-button">Restart Quiz</button>
//   `;
//   return element;
// };

// const restartQuiz = () => {
//   quizData.currentQuestionIndex = 0;
//   quizData.questions.forEach((question) => {
//     question.selected = null;
//   });
//   initWelcomePage();
// };
