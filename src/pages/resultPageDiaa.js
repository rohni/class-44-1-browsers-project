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