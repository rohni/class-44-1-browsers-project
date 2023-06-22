// scoreView.js
// Create score counter element
// export const createScoreCounter = () => {
//   const element = document.createElement('div');
//   element.id = SCORE_COUNTER_ID;
//   element.innerHTML = `
//     Score: <span id="score-number">0</span>
//     <img id="answer-indicator" src="" alt="">
//   `;
//   return element;
// };

// export const updateScoreCounter = () => {
//   const scoreCounter = document.getElementById(SCORE_COUNTER_ID);
//   const scoreNumber = document.getElementById('score-number');
//   const answerIndicator = document.getElementById('answer-indicator');

//   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

//   if (!currentQuestion) {
//     scoreNumber.innerText = '';
//     answerIndicator.src = '';
//     return;
//   }

//   const score = quizData.questions.reduce(
//     (totalScore, question) => totalScore + (question.selected === question.correct ? 1 : 0),
//     0
//   );
//   scoreNumber.innerText = score;

//   answerIndicator.src = ''; // Clear the image source first

//   if (currentQuestion.selected === currentQuestion.correct) {
//     answerIndicator.src = './images/pngwing.com.png'; // Image for the right answer
//     answerIndicator.alt = 'Right Answer';
//   } else {
//     answerIndicator.src = 'wrong-answer.png'; // Image for the wrong answer
//     answerIndicator.alt = 'Wrong Answer';
//   }
// };