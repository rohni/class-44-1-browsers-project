/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  // const element = document.createElement('li'); it was already there no need for li now we created options btn to choose the correct answer
  const button = document.createElement('button');
  button.classList.add(`answer-btn`);

  button.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return button;
};
