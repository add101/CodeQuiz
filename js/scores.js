
  document.addEventListener('DOMContentLoaded', function () {
    // Get the high scores from local storage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  
    // Display the high scores in an unordered list
    const highScoresList = document.getElementById('highscores');
  
    // Clear the previous contents of the high scores list
    highScoresList.innerHTML = '';
  
    // Add each high score to the list
    highScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
      highScoresList.appendChild(listItem);
    });
  
    // Add event listener for the "Clear Highscores" button
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function () {
      // Clear the high scores from local storage
      localStorage.removeItem('highScores');
  
      // Clear the high scores list on the page
      highScoresList.innerHTML = '';
    });
  })