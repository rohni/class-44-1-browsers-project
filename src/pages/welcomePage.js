
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = (userInterface) => {
  const welcomePageHTML = `
  // NK added welcome to the IQ Quiz button
  
     <div id="welcome-page">
      <h1>Welcome To The IQ Quiz</h1>
       <p>This quiz will test your general knowledge on various topics.</p>
       <p>You will have to answer ten questions with four options each.</p>
       <p>Only one option is correct for each question.</p>
       <p>You will see your score and result at the end of the quiz.</p>
      <button id="start-quiz-button">Start Quiz</button>
    </div>
  `;

  userInterface.innerHTML = welcomePageHTML;

  const startQuizButton = document.getElementById('start-quiz-button');
  startQuizButton.addEventListener('click', () => {
    initQuestionPage(userInterface);

  });
  const welcomeQuizButton = document.getElementById('welcome-to-the-IQ-Quiz-button');
  welcomeQuizButton.addEventListener('click', () => {
    

//  <button id="welcome-to-the-IQ-Quiz-button">Welcome To The IQ Quiz</button>
//     // Create a new paragraph element
//   const messageParagraph = document.createElement('p');
//   messageParagraph.textContent = 'This quiz will test your general knowledge on various topics.You will have to answer ten questions with four options each.Only one option is correct for each question.You will see your score and result at the end of the quiz.';

//   // Get the "welcome-page" element
//   const welcomePage = document.getElementById('welcome-page');

//   // Append the message paragraph to the "welcome-page" element
//   welcomePage.appendChild(messageParagraph);
});
};

