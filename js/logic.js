// Get references to various HTML elements
const startButton = document.getElementById('start');
const timeElement = document.getElementById('time');
const questionTitleElement = document.getElementById('question-title');
const choicesElement = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');

// Initialize variables to keep track of quiz state
let currentQuestionIndex = 0;
let timeLeft = 60; // Set the initial time for the quiz
let timerInterval;

/**
 * Function to start the quiz.
 */
function startQuiz() {
  // Hide the start screen and show the questions
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');

  // Start the timer
  startTimer();

  // Display the first question
  displayQuestion();
}

/**
 * Function to start the timer.
 */
function startTimer() {
  // Set up an interval to decrement the time every second
  timerInterval = setInterval(function () {
    timeLeft--;
    timeElement.textContent = timeLeft;

    // Check if time has run out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

/**
 * Function to display a question.
 */
function displayQuestion() {
  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  // Update the question title and clear the choices
  questionTitleElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  // Create buttons for each choice and attach event listeners
  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', function () {
      checkAnswer(choice);
    });
    choicesElement.appendChild(choiceButton);
  });
}

/**
 * Function to check the selected answer.
 * @param {string} selectedChoice - The choice selected by the user.
 */
function checkAnswer(selectedChoice) {
  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the selected choice is correct
  if (selectedChoice === currentQuestion.correctAnswer) {
    // Provide feedback for correct answers
    feedbackElement.textContent = 'Correct!';
  } else {
    // Provide feedback for incorrect answers and subtract time
    feedbackElement.textContent = 'Incorrect!';
    timeLeft -= 10;
  }

  // Show feedback briefly
  feedbackElement.classList.remove('hide');
  setTimeout(() => {
    feedbackElement.classList.add('hide');
  }, 1500);

  // Move to the next question
  currentQuestionIndex++;

  // Check if the quiz has ended
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
  } else {
    // Display the next question
    displayQuestion();
  }
}

/**
 * Function to end the quiz.
 */
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Show the end screen and hide the questions
  document.getElementById('questions').classList.add('hide');
  endScreen.classList.remove('hide');

  // Display the final score
  finalScoreElement.textContent = timeLeft;

  // Save the final score and initials to local storage
  saveHighScore();
  // Display high scores
  displayHighScores();
}

/**
 * Function to save high score to local storage.
 */
function saveHighScore() {
  const initials = initialsInput.value.trim();
  const score = timeLeft;

  // Check if initials and score are valid
  if (initials && !isNaN(score)) {
    // Retrieve existing high scores from local storage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Check if there's an existing entry with the same initials
    const existingEntryIndex = highScores.findIndex(entry => entry.initials === initials);

    if (existingEntryIndex !== -1) {
      // Update the existing entry if the new score is higher
      if (score > highScores[existingEntryIndex].score) {
        highScores[existingEntryIndex].score = score;
      }
    } else {
      // Add a new entry if no existing entry with the same initials
      highScores.push({ initials, score });
    }

    // Sort the high scores by score in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Store the updated high scores back in local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Navigate to the high scores page
    window.location.href = 'highscores.html';
  }
}

// Event listener for the submit button
submitButton.addEventListener('click', function () {
  // Save the score and initials (you can handle this part based on your preferences)
  saveHighScore();
  // Reload the page or navigate to the high scores page
  // window.location.href = 'highscores.html';
});

// Event listener for the start button
startButton.addEventListener('click', startQuiz);
