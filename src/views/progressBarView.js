
// progressBarView.js

import { PROGRESS_BAR_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createProgressBar = () => {
  const progressBar = document.createElement('div');
  progressBar.id = PROGRESS_BAR_ID;
  return progressBar;
};

export const updateProgressBar = () => {
  const progressBar = document.getElementById(PROGRESS_BAR_ID);
  const progress = (quizData.currentQuestionIndex / quizData.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
};
