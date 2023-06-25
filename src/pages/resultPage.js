import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { updateScoreCounter } from '../views/scoreView.js';

// const MAX_SCORE = 100;
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

  // create a button element for  new try.
  


  const tryAgain = document.createElement('button');
  tryAgain.id = 'restart-button';
  tryAgain.textContent = 'Try Again';

  tryAgain.addEventListener('click', () => {
  location.reload(); // Reload the page
});

document.body.appendChild(tryAgain);

  // clear the user interface and append the result page element
  if (userInterface) {
    userInterface.innerHTML = '';
    userInterface.appendChild(resultPage);
  } else {
    console.error('Error: userInterface element is not defined.');
  }
}


// Call the function to initialize the result page
// initResultPage(document.getElementById('user-interface'), 5, 10);
