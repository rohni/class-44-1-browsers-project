/**
 * Create an Answer element
 * @returns {Element}
 */
/*export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};*/
export const createAnswerElement = (key, answerText, isCorrect) => {
  const answerContainer = document.createElement('div');
  answerContainer.className = 'answerContainer';

  const radioButton = document.createElement('input');
  radioButton.type = 'radio';
  radioButton.name = 'answerOption';
  radioButton.value = key;
  radioButton.id = key;
  answerContainer.appendChild(radioButton);

  const label = document.createElement('label');
  label.htmlFor = key;
  label.textContent = answerText;
  answerContainer.appendChild(label);
 
  
  

  radioButton.addEventListener('change', () => {
    quizData.questions[quizData.currentQuestionIndex].selected = key;
    updateScore();
  });

  return answerContainer;
};



