import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { doc } from 'prettier';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);
  //Nk so here by document.getElementById(ANSWERS_LIST_ID) as we r assigning to the HTML id to the li as it assumes that we have defined the ANSWERS_LIST_ID const to hold the id value..
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //1-for of loop is iterates over the entries (key and answertext) over the answers objects they r in the data.js file It goes through each answer option one by one.
  //2- inside the loop we are having 2 variable to stor the key value of the cureent answer options one by one 
  //3- now the function createAnswerElement created to create an answer element based on the key and answertext which r the parameters to the function 
  //4- this function as if we are creating in the HTML li with the answer inside.
  //5- finally the answerElement is from createAnswerElement ()function which will add the list of the answer li html:P to add we should have appendChild to the answersListElement ..
  // by looping we can create the answer elements for a given question displaying them as a list of options. NK
  
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  // if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
  //   const resultButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  //   resultButton.textContent = 'View Results';
  //   resultButton.id = 'show-results-button';
  //   document
  //     .getElementById('show-results-button')
  //     .addEventListener('click', CountScoreAndShowResults);
  // } else {
  //   document
  //     .getElementById(NEXT_QUESTION_BUTTON_ID)
  //     .addEventListener('click', nextQuestion);
  // }










  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
