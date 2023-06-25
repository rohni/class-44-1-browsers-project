//questionPage
import { initResultPage  } from './resultPage.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { timer } from '../views/timer.js';
import { updateScoreCounter, createScoreCounter, } from '../views/scoreView.js';

export const initQuestionPage = (userInterface) => {
  const { questions } = quizData;

  const updateQuestionPage = () => {
    const { currentQuestionIndex, questions } = quizData;

    const question = questions[currentQuestionIndex] || {
      text: 'Congratulations, you have completed the quiz. Click next to see your score and feedback',
    };

    const questionPageHTML = `
      <div class="question-page">
        <div class="progress-bar"></div>
        <div id="question">${question.text}</div>
        <div id="options">
          ${generateOptionsHTML(question)}
        </div>
        <button id="next-button">${currentQuestionIndex < questions.length ? 'Next' : 'Finish'}</button>
      </div>
    `;

    userInterface.innerHTML = questionPageHTML;

    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const progressBar = document.querySelector('.progress-bar');

    if (progressBar) {
      progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    }

    if (optionsElement) {
      optionsElement.addEventListener('change', handleOptionChange);
    }

    if (nextButton) {
      nextButton.addEventListener('click', handleNextButtonClick);
    }

    timer();

    // Create and append the score counter element
    const scoreCounter = createScoreCounter();
    userInterface.appendChild(scoreCounter);
  };

  const generateOptionsHTML = (question) => {
    const { answers } = question;
    let optionsHTML = '';

    for (const optionKey in answers) {
      optionsHTML += `
        <label class="option">
          <input type="radio" name="answer" value="${optionKey}">
          ${answers[optionKey]}
          <img class="answer-indicator" src="" alt="">
        </label>
      `;
    }

    return optionsHTML;
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const { currentQuestionIndex } = quizData;

    quizData.questions[currentQuestionIndex].selected = selectedOption;

    updateScoreCounter();
  };

  const handleNextButtonClick = () => {
    const { currentQuestionIndex, questions } = quizData;
    const optionInputs = document.querySelectorAll('input[type="radio"]:checked');

    optionInputs.forEach((input) => {
      input.checked = false;
    });

    quizData.currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      updateQuestionPage();
    } else {
      initResultPage(
        userInterface,
        calculateScore(),
        questions.length,
        () => initWelcomePage(userInterface) // Navigate back to the welcome page
      );
    }
  };

  const calculateScore = () => {
    let score = 0;
    const { questions } = quizData;

    questions.forEach((question) => {
      if (question.selected === question.correct) {
        score++;
      }
    });

    return score;
  };

  updateQuestionPage();
};

// Call the function to initialize the question page
initQuestionPage(document.getElementById('user-interface'));
