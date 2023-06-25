// answerView.js
import { SCORE_COUNTER_ID } from '../constants.js';
import { updateScoreCounter } from '../views/scoreView.js';
import { quizData } from '../data.js';

export const updateAnswerClass = (answerContainer, isCorrect) => {
  answerContainer.classList.remove('correct', 'wrong');
  if (isCorrect) {
    answerContainer.classList.add('correct');
    updateScoreCounter(calculateScore());
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


