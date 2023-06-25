//answerview.js


import { SCORE_COUNTER_ID } from '../constants.js';

export const updateScoreCounter = (score) => {
  const scoreCounter = document.getElementById(SCORE_COUNTER_ID);
  scoreCounter.textContent = score;
};









