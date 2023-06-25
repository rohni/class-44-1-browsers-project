// scoreView.js
import { SCORE_COUNTER_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createScoreCounter = () => {
  const element = document.createElement('div');
  element.id = SCORE_COUNTER_ID;
  element.innerHTML = `
    <span id="score-number" class="score-number" style="display: none;">Score: 0</span>
    <div id="answer-indicator" class="center-align">
      <img src="">
    </div>
  `;
  return element;
};



export const updateScoreCounter = (score) => {
  const scoreNumber = document.getElementById('score-number');
  const answerIndicator = document.getElementById('answer-indicator');

  scoreNumber.textContent = score;
  answerIndicator.innerHTML = ''; // Clear the existing content first

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  if (!currentQuestion) {
    scoreNumber.textContent = '';
    return;
  }

  if (currentQuestion.selected === currentQuestion.correct) {
    const correctImage = document.createElement('img');
    correctImage.src = '/public/images/correctanswer.png';
    correctImage.alt = 'Right Answer';
    correctImage.classList.add('fade-in'); // Add a fade-in animation class
    answerIndicator.appendChild(correctImage);
  } else {
    const wrongImage = document.createElement('img');
    wrongImage.src = '/public/images/wronganswer.png';
    wrongImage.alt = 'Wrong Answer';
    wrongImage.classList.add('slide-in'); // Add a slide-in animation class
    answerIndicator.appendChild(wrongImage);
  }
};
