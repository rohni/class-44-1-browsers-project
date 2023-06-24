/**

Create the welcome screen
@returns {Element}
*/
const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
   <h1 id="welcome" class="classbtn">Welcome To IQ Quiz</h1>
   <button id="${START_QUIZ_BUTTON_ID}" class="classbtn">start quiz</button>
  `;
  return element;
  };
  
  export default createWelcomeElement;





// /**
//  * Create the welcome screen
//  * @returns {Element}
//  */

// export const createWelcomeElement = () => {
//   const element = document.createElement('div');
//   //  added id to h1 to style it CSS
//   // add classbtn to both to style them CSS with hover effect
//   element.innerHTML = String.raw`
//    <h1 id="welcome" class="classbtn">Welcome To IQ Quiz</h1>
//     <button id="${START_QUIZ_BUTTON_ID}" class="classbtn">start quiz</button>
//   `;
//   return element;
// };
