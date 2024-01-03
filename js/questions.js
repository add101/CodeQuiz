// questions.js

const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "High-level Text Management Language", "Hyper Transferable Markup Language", "High-level Text Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<link>", "<a>", "<hlink>", "<url>"],
    correctAnswer: "<a>"
  },
  {
    question: "How can you apply external styles to an HTML document?",
    choices: ["Using the <style> tag", "Inline styles only", "Using the <link> tag with a CSS file", "Using the font attribute"],
    correctAnswer: "Using the <link> tag with a CSS file"
  },
  {
    question: "What does the acronym CSS stand for?",
    choices: ["Counter Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
  },
  {
    question: "What does 'UX' stand for in web development?",
    choices: ["User Experience", "Universal Experience", "User Exchange", "Unified Experience"],
    correctAnswer: "User Experience"
  },
  {
    question: "What is the purpose of wireframing in UX design?",
    choices: ["To create the final visual design of a website", "To outline the structure and layout of a webpage", "To test the functionality of a website", "To generate code for a webpage"],
    correctAnswer: "To outline the structure and layout of a webpage"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    choices: ["variable x;", "var x;", "x = variable;", "declare x;"],
    correctAnswer: "var x;"
  },
  {
    question: "What is the function of the document.getElementById() method in JavaScript?",
    choices: ["It gets the value of an element's ID attribute", "It sets the value of an element's ID attribute", "It retrieves the HTML content of an element", "It gets a reference to an HTML element with a specified ID"],
    correctAnswer: "It gets a reference to an HTML element with a specified ID"
  }
];

// Export the questions array for use in logic.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = questions;
}