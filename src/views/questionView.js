//questionVew.js

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


