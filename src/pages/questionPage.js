// <<<<<<< timer-attempt
// import {
//   ANSWERS_LIST_ID,
//   NEXT_QUESTION_BUTTON_ID,
//   USER_INTERFACE_ID,
// } from '../constants.js';
// import { createQuestionElement } from '../views/questionView.js';
// import { createAnswerElement } from '../views/answerView.js';
// import { quizData } from '../data.js';
// import { addTimer } from '../views/timerView.js';

// export const initQuestionPage = () => {
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';

//   const timerElement = addTimer(userInterface);

//   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

//   const questionElement = createQuestionElement(currentQuestion.text);

//   userInterface.appendChild(questionElement);
//   //Nk so here by document.getElementById(ANSWERS_LIST_ID) as we r assigning to the HTML id to the li as it assumes that we have defined the ANSWERS_LIST_ID const to hold the id value..
//   const answersListElement = document.getElementById(ANSWERS_LIST_ID);

//   //1- the for of loop is used to iterate through each answer option(currentQuestion.answers) object--->(i created btn for that in the in the answerView page const button = document.createElement('button');
//   //now we are having object.entries() method (data.js page )is used to convert the object into array of key value pairs
//   //each key represent == answer options's index
//   //and each value represent == answer text
//   for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
//     //2- inside the loop we create this function createAnswerElement()has 2 parameter based on key and answerText which similarly li in the HTML
//     const answerElement = createAnswerElement(key, answerText);
//     //3- I added to the answerElement addEventListener method which is listen for the click event on the answerElement so the answer element is CLICKED the call back function is executed.
//     answerElement.addEventListener('click', (event) => {
//       console.log('Firing ', event.target);
//       //4-inside the callback function currentQuestion.selected property is updated with the selected answer options's key and this enable us to keep tracking of the user's selected answer for the question
//       currentQuestion.selected = key;
//       //5-now i should add the condition for the answer options correct or wrong if selected answer is correct
//       if (currentQuestion.selected === currentQuestion.correct) {
//         //if it is correct the correct class added to the answerElement by using classList.add method
//         answerElement.classList.add('correct');
//         //now else if its wrong the wrong class is added
//       } else {
//         answerElement.classList.add('wrong')
//       }
//     });
//     //6-and finally i need to create like ul in the HTML which is appendChild in JS that hilds allthe answer options for the current question 
//     answersListElement.appendChild(answerElement);
//   }

//   //7- i added 2 eventListener to the next question button element (NEXT_QUESTION_BUTTON_ID) one calls the nextQuestion function when the button is clicked  and update the currentQuestionIndex to be moved for the next question and re initailze the question page 
//   document
//     .getElementById(NEXT_QUESTION_BUTTON_ID)
//     .addEventListener('click', nextQuestion);
//   //8- the other listner calls the startTimer function when the button clicked this function is responsible to start the timer for the quiz
//   // document
//   //   .getElementById(NEXT_QUESTION_BUTTON_ID)
//   //   .addEventListener('click', startTimer);
// };
// //9-and finally nextQuestion function is defined by increasing incremental the currentQuestionIndex to be moved to the next question and call initQuestionPage function to initailize the page with new question 

// export const nextQuestion = () => {
//   quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

//   initQuestionPage();
// };


// //in this codes i tried to set up event listener for the answer options and the next question button... this codes are updating the selected answer add class for the correct and wrong answers and provides functionality to move for the next question 














// //update from diaa


// // const initQuestionPage = () => {
// =======
// // import {
// //   ANSWERS_LIST_ID,
// //   NEXT_QUESTION_BUTTON_ID,
// //   USER_INTERFACE_ID,
// // } from '../constants.js';
// // import { createQuestionElement } from '../views/questionView.js';
// // //import { createAnswerElement } from '../views/answerView.js';
// // import { quizData } from '../data.js';

// // export const initQuestionPage = () => {
// >>>>>>> main
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';

//   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

//   const questionElement = createQuestionElement(currentQuestion.text);

//   userInterface.appendChild(questionElement);
//   //Nk so here by document.getElementById(ANSWERS_LIST_ID) as we r assigning to the HTML id to the li as it assumes that we have defined the ANSWERS_LIST_ID const to hold the id value..
//   const answersListElement = document.getElementById(ANSWERS_LIST_ID);
//   // button.classList.add(`answer-btn`); the console says about this line so i commented out it works

//   //1- the for of loop is used to iterate through each answer option(currentQuestion.answers) object--->(i created btn for that in the in the answerView page const button = document.createElement('button');
//   //now we are having object.entries() method (data.js page )is used to convert the object into array of key value pairs
//   //each key represent == answer options's index
//   //and each value represent == answer text
//   for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
//     //2- inside the loop we create this function createAnswerElement()has 2 parameter based on key and answerText which similarly li in the HTML
//    // const answerElement = createAnswerElement(key, answerText);
//     //3- I added to the answerElement addEventListener method which is listen for the click event on the answerElement so the answer element is CLICKED the call back function is executed.
//     //answerElement.addEventListener('click', () => {
//       //4-inside the callback function currentQuestion.selected property is updated with the selected answer options's key and this enable us to keep tracking of the user's selected answer for the question
//       currentQuestion.selected = key;
//       //5-now i should add the condition for the answer options correct or wrong if selected answer is correct
//       if (currentQuestion.selected === currentQuestion.correct) {
//         //if it is correct the correct class added to the answerElement by using classList.add method
//         answerElement.classList.add('correct');
//         //now else if its wrong the wrong class is added
//       } else {
//         answerElement.classList.add('wrong')
//       }
//     //});
//     //6-and finally i need to create like ul in the HTML which is appendChild in JS that hilds allthe answer options for the current question
//     answersListElement.appendChild(answerElement);
//   }

// // <<<<<<< Quiz-Sabina

// //    document
// //      .getElementById(NEXT_QUESTION_BUTTON_ID)
// //      .addEventListener('click', nextQuestion);

// //     //.s element to display score
// //    // const scoreElement = document.createElement('p');
// //     //scoreElement.textContent = `Score: ${quizData.score}`;
// //     //userInterface.appendChild(scoreElement);

// //     /* update score

// //     const updateScore = () => {
// //       let score = 0;

// //       for (const question of quizData.questions) {
// //         if (question.selected === question.correct) {
// //           score += 5;
// //         }
// //       }

// //       quizData.score = score;
// //     };*/

// // =======
// //   //7- i added 2 eventListener to the next question button element (NEXT_QUESTION_BUTTON_ID) one calls the nextQuestion function when the button is clicked  and update the currentQuestionIndex to be moved for the next question and re initailze the question page
// //   document
// //     .getElementById(NEXT_QUESTION_BUTTON_ID)
// //     .addEventListener('click', nextQuestion);
// //   //8- the other listner calls the startTimer function when the button clicked this function is responsible to start the timer for the quiz
// //   document
// //     .getElementById(NEXT_QUESTION_BUTTON_ID)
// //     .addEventListener('click', startTimer);
// // >>>>>>> main
// };
//9-and finally nextQuestion function is defined by increasing incremental the currentQuestionIndex to be moved to the next question and call initQuestionPage function to initailize the page with new question

// <<<<<<< Quiz-Sabina

// const nextQuestion = () => {
//   quizData.currentQuestionIndex++;
// =======
// export const nextQuestion = () => {
//   quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
// >>>>>>> main

//   if (quizData.currentQuestionIndex >= quizData.questions.length) {
//     showEndPage();
//   } else {
//     initQuestionPage();
//   }

// //.s  created end page with restart button, result message and score
// const showEndPage = () => {
//   const userInterface = document.getElementById(USER_INTERFACE_ID);
//   userInterface.innerHTML = '';
// // .s result message , need 60 % to pass
//   const resultElement = document.createElement('h2');
//   const passPercentage = 60;
//   const percentageCorrect = (quizData.score / (quizData.questions.length * 5)) * 100;

//   if (percentageCorrect >= passPercentage) {
//     resultElement.textContent = 'Congratulations! You passed the quiz.';
//   } else {
//     resultElement.textContent = 'Oops! You failed the quiz.';
//   }
// //total score .s
//   const scoreElement = document.createElement('p');
//   scoreElement.textContent = `Your total Score: ${quizData.score}`;
// // restart button .s
//   const restartButton = document.createElement('button');
//   restartButton.textContent = 'Restart Quiz';
//   restartButton.addEventListener('click', () => {
//     quizData.currentQuestionIndex = 0;
//     quizData.score = 0;
//     initQuestionPage();
//   });

//   userInterface.appendChild(resultElement);
//  // userInterface.appendChild(scoreElement);
//   userInterface.appendChild(restartButton);
// };

// <<<<<<< Quiz-Sabina
// =======

// //in this codes i tried to set up event listener for the answer options and the next question button... this codes are updating the selected answer add class for the correct and wrong answers and provides functionality to move for the next question

// //update from diaa

// // const initQuestionPage = () => {
// //   const userInterface = document.getElementById(USER_INTERFACE_ID);
// //   userInterface.innerHTML = '';

// //   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
// //   const questionElement = createQuestionElement(currentQuestion.text);

// //   userInterface.appendChild(questionElement);

// //   const answersListElement = document.getElementById(ANSWERS_LIST_ID);

// //   for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
// //     const answerElement = createAnswerElement(key, answerText, quizData.currentQuestionIndex);
// //     answerElement.addEventListener('click', () => selectAnswer(key));
// //     answersListElement.appendChild(answerElement);
// //   }

// //   document.getElementById(NEXT_QUESTION_BUTTON_ID).addEventListener('click', nextQuestion);

// //   updateProgressBar();
// //   updateScoreCounter();
// // };

// // const selectAnswer = (selectedAnswer) => {
// //   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
// //   currentQuestion.selected = selectedAnswer;
// //   updateScoreCounter();
// // };

// // const nextQuestion = () => {
// //   quizData.currentQuestionIndex++;
// //   updateScoreCounter();
// //   if (quizData.currentQuestionIndex < quizData.questions.length) {
// //     initQuestionPage();
// //   } else {
// //     showResultPage();
// //   }
// // };
