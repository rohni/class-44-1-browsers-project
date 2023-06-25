// progressBarView.js

import { PROGRESS_BAR_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createProgressBar = () => {
  const progressBar = document.createElement('div');
  progressBar.classList.add(PROGRESS_BAR_ID); // Use class instead of id
  return progressBar.outerHTML; // Convert the HTML element to a string
};

export const updateProgressBar = () => {
  const progressBar = document.querySelector(`.${PROGRESS_BAR_ID}`); // Use class selector
  const progress = (quizData.currentQuestionIndex / quizData.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
};
