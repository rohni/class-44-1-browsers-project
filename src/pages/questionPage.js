import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }


   document
     .getElementById(NEXT_QUESTION_BUTTON_ID)
     .addEventListener('click', nextQuestion);

    //.s element to display score
   // const scoreElement = document.createElement('p');
    //scoreElement.textContent = `Score: ${quizData.score}`;
    //userInterface.appendChild(scoreElement);

    /* update score

    const updateScore = () => {
      let score = 0;
    
      for (const question of quizData.questions) {
        if (question.selected === question.correct) {
          score += 5;
        }
      }
    
      quizData.score = score;
    };*/
    
};






const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    showEndPage();
  } else {
    initQuestionPage();
  }
};
//.s  created end page with restart button, result message and score
const showEndPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
// .s result message , need 60 % to pass
  const resultElement = document.createElement('h2');
  const passPercentage = 60;
  const percentageCorrect = (quizData.score / (quizData.questions.length * 5)) * 100;

  if (percentageCorrect >= passPercentage) {
    resultElement.textContent = 'Congratulations! You passed the quiz.';
  } else {
    resultElement.textContent = 'Oops! You failed the quiz.';
  }
//total score .s
  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Your total Score: ${quizData.score}`;
// restart button .s
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Quiz';
  restartButton.addEventListener('click', () => {
    quizData.currentQuestionIndex = 0;
    quizData.score = 0;
    initQuestionPage();
  });

  userInterface.appendChild(resultElement);
 // userInterface.appendChild(scoreElement);
  userInterface.appendChild(restartButton);
};

